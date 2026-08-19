---
"osrs-tools": minor
---

Add a shared `evaluateRequirement`/`evaluateRequirements` eligibility evaluator (new `./eligibility` subpath) and `QuestTool.evaluateEligibility()`, which recursively resolves quest prerequisites using it. This replaces requirement-dispatch logic that was previously duplicated by consumers.

Also fixes two bugs: `QuestRequirement.fromQuestName()` no longer throws (it was an unimplemented stub, called eagerly at module load by `AttackUnlocks.ts`), and removes dead unreachable code in `SlayerMaster.calculateTotalWeight()`.

Adds `./guilds`, `./items`, `./leagues` subpath exports for parity with the package's other domains, and exports `SlayerAssignmentContext` from the package root.
