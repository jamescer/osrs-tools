import { CombatLevelRequirement, QuestRequirement, SlayerLevelRequirement } from '../../Requirement';
import { Task } from '../core/Task';

/**
 * Mortimer's task list.
 * Reference: https://oldschool.runescape.wiki/w/Mortimer
 *
 * Every task Mortimer assigns has a superior variant (see MortimerSlayerMaster.hasSuperiorVariants()).
 * Quantities, extended quantities and weights below are taken directly from the Wiki's task table.
 *
 * Gryphons, Custodian stalkers, Venators and Aquanites are Wyrmscraig-exclusive monsters with no
 * established Slayer level requirement at time of writing, so their `requirements` are left empty.
 * This content was planned but not yet released; details are subject to change.
 */
const mortimerTasks: Task[] = [
  Task.create({
    name: 'Crawling Hands',
    quantity: { max: 50, min: 35 },
    requirements: [new SlayerLevelRequirement(5), new CombatLevelRequirement(20)],
    weight: 10,
  }),
  Task.create({
    name: 'Cave crawlers',
    quantity: { max: 50, min: 35 },
    requirements: [new SlayerLevelRequirement(10), new CombatLevelRequirement(10)],
    weight: 10,
  }),
  Task.create({
    name: 'Banshees',
    quantity: { max: 50, min: 35 },
    requirements: [
      new SlayerLevelRequirement(15),
      new CombatLevelRequirement(20),
      new QuestRequirement('Priest in Peril'),
    ],
    weight: 10,
  }),
  Task.create({
    name: 'Rockslugs',
    quantity: { max: 50, min: 35 },
    requirements: [new SlayerLevelRequirement(20)],
    weight: 10,
  }),
  Task.create({
    name: 'Cockatrice',
    quantity: { max: 50, min: 35 },
    requirements: [new SlayerLevelRequirement(25)],
    weight: 10,
  }),
  Task.create({
    name: 'Pyrefiends',
    quantity: { max: 50, min: 35 },
    requirements: [new SlayerLevelRequirement(30)],
    weight: 10,
  }),
  Task.create({
    name: 'Infernal Mages',
    quantity: { max: 50, min: 35 },
    requirements: [
      new SlayerLevelRequirement(45),
      new CombatLevelRequirement(45),
      new QuestRequirement('Priest in Peril'),
    ],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Bloodveld',
    quantity: { max: 180, min: 120 },
    requirements: [new SlayerLevelRequirement(50), new CombatLevelRequirement(50)],
    weight: 8,
  }),
  Task.create({
    extended: { max: 200, min: 160 },
    name: 'Gryphons',
    quantity: { max: 120, min: 80 },
    requirements: [],
    weight: 10,
  }),
  Task.create({
    name: 'Jellies',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(52)],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Custodian stalkers',
    quantity: { max: 120, min: 80 },
    requirements: [],
    weight: 8,
  }),
  Task.create({
    name: 'Turoth',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(55)],
    weight: 10,
  }),
  Task.create({
    name: 'Warped creatures',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(56)],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Cave horrors',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(58), new CombatLevelRequirement(40), new QuestRequirement('Cabin Fever')],
    weight: 10,
  }),
  Task.create({
    alternatives: ['Deviant spectres'],
    extended: { max: 250, min: 200 },
    name: 'Aberrant spectres',
    quantity: { max: 120, min: 80 },
    requirements: [
      new SlayerLevelRequirement(60),
      new CombatLevelRequirement(65),
      new QuestRequirement('Priest in Peril'),
    ],
    weight: 10,
  }),
  Task.create({
    bosses: ['Basilisk Knight'],
    extended: { max: 250, min: 200 },
    name: 'Basilisks',
    quantity: { max: 60, min: 40 },
    requirements: [new SlayerLevelRequirement(40), new CombatLevelRequirement(40)],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Wyrms',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(62)],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Dust devils',
    quantity: { max: 180, min: 120 },
    requirements: [new SlayerLevelRequirement(65), new QuestRequirement('Desert Treasure I')],
    weight: 8,
  }),
  Task.create({
    name: 'Kurask',
    quantity: { max: 60, min: 40 },
    requirements: [new SlayerLevelRequirement(70), new CombatLevelRequirement(80)],
    weight: 10,
  }),
  Task.create({
    name: 'Venators',
    quantity: { max: 180, min: 120 },
    requirements: [],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Gargoyles',
    quantity: { max: 180, min: 120 },
    requirements: [new SlayerLevelRequirement(75), new CombatLevelRequirement(80)],
    weight: 10,
  }),
  Task.create({
    extended: { max: 200, min: 150 },
    name: 'Aquanites',
    quantity: { max: 60, min: 40 },
    requirements: [],
    weight: 10,
  }),
  Task.create({
    bosses: ['Nechryarch'],
    extended: { max: 250, min: 200 },
    name: 'Nechryael',
    quantity: { max: 200, min: 150 },
    requirements: [new SlayerLevelRequirement(80), new CombatLevelRequirement(80)],
    weight: 8,
  }),
  Task.create({
    name: 'Drakes',
    quantity: { max: 60, min: 40 },
    requirements: [new SlayerLevelRequirement(84)],
    weight: 10,
  }),
  Task.create({
    bosses: ['Abyssal Sire'],
    extended: { max: 250, min: 200 },
    name: 'Abyssal demons',
    quantity: { max: 180, min: 120 },
    requirements: [
      new SlayerLevelRequirement(85),
      new CombatLevelRequirement(85),
      new QuestRequirement('Priest in Peril'),
      new QuestRequirement('Fairytale II - Cure a Queen'),
    ],
    weight: 8,
  }),
  Task.create({
    extended: { max: 135, min: 110 },
    name: 'Dark beasts',
    quantity: { max: 60, min: 40 },
    requirements: [new SlayerLevelRequirement(90), new QuestRequirement("Mourning's End Part II")],
    weight: 10,
  }),
  Task.create({
    extended: { max: 250, min: 200 },
    name: 'Araxytes',
    quantity: { max: 180, min: 120 },
    requirements: [new SlayerLevelRequirement(92), new QuestRequirement('Sins of the Father')],
    weight: 8,
  }),
  Task.create({
    bosses: ['Thermonuclear Smoke Devil'],
    name: 'Smoke devils',
    quantity: { max: 120, min: 80 },
    requirements: [new SlayerLevelRequirement(93)],
    weight: 8,
  }),
  Task.create({
    bosses: ['Alchemical Hydra'],
    name: 'Hydras',
    quantity: { max: 200, min: 150 },
    requirements: [new SlayerLevelRequirement(95), new QuestRequirement('Dragon Slayer II')],
    weight: 10,
  }),
];

export { mortimerTasks };
