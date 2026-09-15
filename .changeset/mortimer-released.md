---
"osrs-tools": minor
---

Reconcile Mortimer/Wyrmscraig (the "Mortifier" Slayer system) against the live release — it shipped 29 July 2026 with "Fallen From Grace" but had only existed in this library as pre-release, speculative data. Fixes: `Mortimer.minimumCombatLevel` was `0` and is now the real `100` (`minimumSlayerLevel` `70`, both gating access alongside the quest); the placeholder concept-art `imageUrl` is now the live portrait; and five tasks (Gryphons, Custodian stalkers, Warped creatures, Venators, Aquanites) that previously had no or incomplete requirements now carry their real Slayer level, combat level, skill level, and quest gates. Doc comments across `Mortimer.ts`, `MortimerSlayerMaster.ts`, `Mortifier.ts`, and `masters/registry.ts` no longer describe this as unreleased/subject-to-change content.
