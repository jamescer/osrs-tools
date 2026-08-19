# Conventions

# WIP


Design patterns established in this codebase. Follow these when adding or extending code so new work reads as if
it were written by the same hand as the existing modules. See [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) for what
the modules referenced below actually do.

## File organization

- **One file per data entity.** Each quest is its own file in `src/runescape/model/quest/all/`, each diary region is
  its own subdirectory under `src/runescape/model/diaries/`, each slayer master has its own file under
  `src/runescape/model/slayer/masters/` with a matching task-list file in `src/runescape/model/slayer/task/`. Don't
  collapse these into shared arrays/objects even when a new entity is small — the pattern trades some duplication for
  the ability to find and diff any single item in one place.
- **`index.ts` barrel files** at each module boundary aggregate and re-export everything public from that module.
  When adding a new file to an existing module directory, add its exports to that directory's `index.ts` rather than
  expecting consumers to import the file directly.
- New subpath exports (`osrs-tools/<name>`) are registered in `package.json`'s `exports` field, pointing at the
  compiled `dist/` output of that module's barrel.

## Requirement / eligibility pattern

- All "can the player do X" checks are expressed as a `Requirement[]` list built from the classes in
  `src/runescape/model/Requirement.ts` (`LevelRequirement`, `QuestRequirement`, `SlayerUnlockRequirement`, etc.), not
  as ad hoc boolean fields on the entity.
- Requirement checking against an account is centralized in
  `src/runescape/model/eligibility/RequirementEvaluator.ts` (`evaluateRequirement` / `evaluateRequirements`) rather
  than reimplemented per-module. `QuestTool` and the Slayer eligibility module (`slayer/core/eligibility.ts`) both
  build on top of this shared layer instead of duplicating the switch-on-`RequirementType` logic.
- Requirement types that hiscores data can't verify (`Quest`, `Item`, `Location`, `QuestPoint`, `SlayerUnlock`) come
  back from the shared evaluator as **advisories** — `met: true, verifiable: false` — not as hard failures. A caller
  with more information (e.g. `QuestTool`, which can recursively resolve quest prerequisites from its own registry)
  is expected to override those specific advisory checks with a real answer rather than trusting the placeholder.
  When adding a new requirement type, decide up front whether it's hiscores-verifiable; if not, follow this same
  advisory convention instead of inventing a new "unknown" state.

## Mutable player-progress state

When a model class needs to track player-progress-dependent state (things that mirror in-game progress — block
lists, unlock counters, completed-task sets, rumour setups, quest completions), use a **single mutable instance
field** with getter/setter/incrementer methods, and have downstream query/generation methods read `this.<field>`
directly with **no parallel optional-parameter override**.

- Precedent: `SlayerMaster.blockedTasks` (mutated via `blockTask()` / `unblockTask()`; methods just read
  `this.blockedTasks`) and `MortimerSlayerMaster.completedTasks` (`getCompletedTasks()` / `setCompletedTasks()` /
  `incrementCompletedTasks()`, consumed internally by `getAvailableMortifiers()` / `getTaskChoiceCount()` /
  `getTaskChoices()` with no parameter).
- **Why:** a hybrid design — an optional parameter that falls back to the instance field when omitted — creates two
  sources of truth with implicit precedence rules. That's been explicitly rejected here in favor of one field, one
  set of accessors.
- **How to apply:** when adding a new piece of mutable player-progress state, default to plain field + get/set/
  increment methods, and have any generation/query method that used to take an equivalent parameter drop it in favor
  of reading `this.<field>`. This is allowed to be a breaking change to the method signature.

## When breaking API changes are acceptable

Breaking a method signature to keep single-source-of-truth design (per the pattern above) is acceptable specifically
for content explicitly marked unreleased/WIP in its own doc comments — e.g. the Mortimer/Wyrmscraig system carries a
"values are subject to change" note. Treat that marker as license to prioritize clean design over backward
compatibility.

For stable/already-shipped APIs (most of the public surface — quests, standard slayer masters, diaries, combat
achievements), backward compatibility needs more consideration before making the same call: prefer additive changes,
and if a signature must change, call it out explicitly (changeset + PR description) rather than doing it quietly.

## Encapsulation

- `OsrsAccount` uses TypeScript private class fields (`#field`) for its internal state, exposing access only through
  getters/methods. Follow this for any new class holding account-derived state that shouldn't be mutated directly
  from outside.

## Data provenance

- Game data (quest requirements, combat achievement tasks, diary tasks, slayer task weights, drop tables) is authored
  directly from the [OSRS Wiki](https://oldschool.runescape.wiki/), not fetched at runtime. When adding or correcting
  data, cite the Wiki page/table you sourced it from in the PR description — this library has no data source of
  truth other than the Wiki and Jagex's hiscores API shape.
- Because the library targets hiscores-API compatibility (`osrs-json-hiscores` JSON shape), any new account-derived
  field should map cleanly onto what that API actually exposes — don't add fields that can't be populated from real
  hiscores data without a big "this can't be verified" caveat (see the eligibility advisory pattern above for how to
  handle that gap instead).

## Zero-dependency constraint

This library ships with **no runtime dependencies** beyond `tslib`. Don't add a runtime dependency to solve a
problem that can be solved with a small amount of local code — the value of this package to consumers is partly that
it's dependency-free and tree-shakeable.
