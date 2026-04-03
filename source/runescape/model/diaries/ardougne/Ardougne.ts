import { LevelRequirement, QuestRequirement } from "../../Requirement";
import type { Diary } from "../Diary";

const quest = (name: string) => new QuestRequirement(name);
const skill = (skillName: string, level: number, boostable = true) => new LevelRequirement(skillName, level, boostable);

/**
 * Ardougne Achievement Diary data, authored directly in TypeScript.
 *
 * Source: https://oldschool.runescape.wiki/w/Ardougne_Diary
 */
export const ArdougneDiary: Diary = {
  name: "Ardougne Diary",
  itemReward: "Ardougne cloak",
  easy: {
    itemReward: "Ardougne cloak 1",
    rewards: {
      description: [
        {
          main: "Ardougne cloak 1",
          other: ["Unlimited teleports to the Ardougne Monastery"],
        },
        {
          main: "1 Antique lamp worth 2,500 experience in any skill of at least level 30",
          other: [],
        },
        {
          main: "Earn twice as many death runes from trading in cats to civilians in West Ardougne",
          other: [],
        },
        {
          main: "10% increased chance to successfully steal from stalls in Ardougne",
          other: [],
        },
        {
          main: "Drops from Jubsters and Frogeels will be noted in the Tower of Life activity",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 2500, levelToUse: 30 }],
    },
    tasks: [
      {
        description: "Have Wizard Cromperty teleport you to the Rune essence mine.",
        requirements: [quest("Rune Mysteries")],
        notes: "Right-click Wizard Cromperty and choose the teleport option.",
      },
      {
        description: "Steal a cake from the East Ardougne market stalls.",
        requirements: [skill("thieving", 5)],
      },
      {
        description: "Sell silk to the Silk trader in East Ardougne for 60 coins each.",
        requirements: [],
        notes: "Offer to sell for 120 coins first, then take the 60-coin option.",
      },
      {
        description: "Use the altar in East Ardougne's church.",
        requirements: [],
        notes: "You need to have missing prayer points for the task to register.",
      },
      {
        description: "Go out fishing on the Fishing Trawler.",
        requirements: [],
        notes: "Starting the minigame is enough.",
      },
      {
        description: "Enter the Combat Training Camp north of West Ardougne.",
        requirements: [quest("Biohazard")],
      },
      {
        description: "Have Tindel Marchant identify a rusty sword for you.",
        requirements: [],
        notes: "Bring a rusty sword and 100 coins. Extra swords are helpful in case the attempt fails.",
      },
      {
        description: "Use the Ardougne lever to teleport to the Wilderness.",
        requirements: [],
        notes: "This sends you to deep Wilderness, so travel light.",
      },
      {
        description: "View Aleck's Hunter Emporium shop in Yanille.",
        requirements: [],
      },
      {
        description: "Check what pets you have insured with Probita in East Ardougne.",
        requirements: [],
        notes: "Use the check option directly on Probita.",
      },
    ],
    itemsRequired: ["Around 100 coins", "Silk", "Rusty sword", "A knife or slashing weapon for safety during the lever trip"],
    questsRequired: ["Biohazard", "Rune Mysteries"],
    skillsRequired: [{ skill: "thieving", level: 5, boostable: true }],
  },
  medium: {
    itemReward: "Ardougne cloak 2",
    rewards: {
      description: [
        {
          main: "Ardougne cloak 2",
          other: ["Three daily teleports to the Ardougne farming patch"],
        },
        {
          main: "1 Antique lamp worth 7,500 experience in any skill of at least level 40",
          other: [],
        },
        {
          main: "Wizard Cromperty gives 100 free noted pure essence each day",
          other: [],
        },
        {
          main: "Unicow, Newtroost, and Spidine drops are noted in the Tower of Life activity",
          other: [],
        },
        {
          main: "10% increased Ardougne pickpocket success rate and larger coin pouch capacity",
          other: [],
        },
        {
          main: "Ability to retarget ring of life teleports to Ardougne and receive extra Ourania runes",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 7500, levelToUse: 40 }],
    },
    tasks: [
      {
        description: "Enter the unicorn pen in Ardougne Zoo using Fairy rings.",
        requirements: [quest("Fairytale II - Cure a Queen")],
        notes: "Use fairy ring code BIS with a dramen or lunar staff.",
      },
      {
        description: "Grapple over Yanille's south wall and jump off.",
        requirements: [skill("agility", 39), skill("strength", 38), skill("ranged", 21)],
        notes: "Bring a mith grapple and any crossbow.",
      },
      {
        description: "Harvest some strawberries from the Ardougne farming patch.",
        requirements: [skill("farming", 31)],
        notes: "Bring three strawberry seeds and standard farming tools.",
      },
      {
        description: "Cast the Ardougne Teleport spell.",
        requirements: [quest("Plague City"), skill("magic", 51)],
        notes: "Requires 2 water runes and 2 law runes.",
      },
      {
        description: "Travel to Castle Wars by Hot Air Balloon.",
        requirements: [quest("Enlightened Journey"), skill("firemaking", 50)],
        notes: "Bring a yew log, or 11 yew logs if the route is not unlocked yet.",
      },
      {
        description: "Claim buckets of sand from Bert in Yanille.",
        requirements: [quest("The Hand in the Sand")],
        notes: "Ultimate Ironmen instead fill a bucket at Bert's sand pit.",
      },
      {
        description: "Catch any fish on the Fishing Platform.",
        requirements: [quest("Sea Slug")],
        notes: "You only need to have started Sea Slug. Bring a small fishing net or rod and bait.",
      },
      {
        description: "Pickpocket the master farmer north of East Ardougne.",
        requirements: [skill("thieving", 38)],
      },
      {
        description: "Collect some cave nightshade from the Skavid caves.",
        requirements: [quest("Watchtower")],
        notes: "Any light source and the Skavid map are recommended.",
      },
      {
        description: "Kill a swordchick in the Tower of Life.",
        requirements: [quest("Tower of Life")],
        notes: "Bring a raw chicken, a raw swordfish, and a weapon.",
      },
      {
        description: "Equip an Iban's upgraded staff or upgrade an Iban's staff.",
        requirements: [quest("Underground Pass")],
        notes: "Bring Iban's staff and 200,000 coins if you need to upgrade it at the Dark Mage.",
      },
      {
        description: "Visit the island east of the Necromancer Tower.",
        requirements: [quest("Fairytale II - Cure a Queen")],
        notes: "Use fairy ring code AIR with a dramen or lunar staff.",
      },
    ],
    itemsRequired: [
      "Dramen or Lunar staff",
      "Mith grapple and any crossbow",
      "3 strawberry seeds and farming tools",
      "2 water runes and 2 law runes",
      "A yew log, or 11 if the Castle Wars route is still locked",
      "A bucket for Bert if needed",
      "Fishing rod and bait or a small fishing net",
      "Any light source and the Skavid map",
      "A raw chicken and raw swordfish",
      "Iban's staff and 200,000 coins if upgrading it",
    ],
    questsRequired: ["Fairytale II - Cure a Queen", "Plague City", "Enlightened Journey", "The Hand in the Sand", "Sea Slug", "Watchtower", "Tower of Life", "Underground Pass"],
    skillsRequired: [
      { skill: "agility", level: 39, boostable: true },
      { skill: "strength", level: 38, boostable: true },
      { skill: "ranged", level: 21, boostable: true },
      { skill: "farming", level: 31, boostable: true },
      { skill: "magic", level: 51, boostable: true },
      { skill: "firemaking", level: 50, boostable: true },
      { skill: "thieving", level: 38, boostable: true },
    ],
  },
  hard: {
    itemReward: "Ardougne cloak 3",
    rewards: {
      description: [
        {
          main: "Ardougne cloak 3",
          other: ["Five daily teleports to the Ardougne farming patch"],
        },
        {
          main: "1 Antique lamp worth 15,000 experience in any skill of at least level 50",
          other: [],
        },
        {
          main: "Wizard Cromperty gives 150 free noted pure essence each day",
          other: [],
        },
        {
          main: "Watchtower Teleport can be redirected to central Yanille",
          other: [],
        },
        {
          main: "10% increased pickpocket success anywhere in Gielinor and larger coin pouch capacity",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 15000, levelToUse: 50 }],
    },
    tasks: [
      {
        description: "Recharge some jewellery at the Totem pole in the Legends' Guild.",
        requirements: [quest("Legends' Quest")],
        notes: "Bring a not-fully-charged skills necklace or combat bracelet.",
      },
      {
        description: "Enter the Magic Guild.",
        requirements: [skill("magic", 66)],
      },
      {
        description: "Attempt to steal from a chest in Ardougne Castle.",
        requirements: [skill("thieving", 72)],
        notes: "A lockpick is recommended.",
      },
      {
        description: "Have a zookeeper put you in Ardougne Zoo's monkey cage.",
        requirements: [quest("Monkey Madness I")],
        notes: "Bring a Karamjan monkey greegree.",
      },
      {
        description: "Teleport to the Watchtower.",
        requirements: [quest("Watchtower"), skill("magic", 58)],
        notes: "Requires 2 earth runes and 2 law runes.",
      },
      {
        description: "Catch a Red Salamander.",
        requirements: [skill("hunter", 59)],
        notes: "Bring at least one rope and a small fishing net.",
      },
      {
        description: "Check the health of a palm tree near Tree Gnome Village.",
        requirements: [skill("farming", 68)],
        notes: "Bring a palm sapling and consider 15 papaya fruit for payment.",
      },
      {
        description: "Pick some poison ivy berries from the patch south of East Ardougne.",
        requirements: [skill("farming", 70)],
        notes: "Bring a poison ivy seed, seed dibber, and rake.",
      },
      {
        description: "Smith a Mithril platebody near Ardougne.",
        requirements: [skill("smithing", 68)],
        notes: "Use the Port Khazard, Yanille, or West Ardougne anvil with 5 mithril bars and a hammer.",
      },
      {
        description: "Enter your POH from Yanille.",
        requirements: [skill("construction", 50, false)],
        notes: "Move your house to Yanille if it is elsewhere.",
      },
      {
        description: "Smith a Dragon sq shield in West Ardougne.",
        requirements: [quest("Plague City"), skill("smithing", 60)],
        notes: "Bring both shield halves and a hammer.",
      },
      {
        description: "Craft some death runes at the Death altar.",
        requirements: [quest("Mourning's End Part II"), skill("runecraft", 65)],
        notes: "Use pure or daeyalt essence and access the Death Altar through the Abyss or Temple of Light route.",
      },
    ],
    itemsRequired: [
      "A skills necklace or combat bracelet with missing charges",
      "A lockpick",
      "A Karamjan monkey greegree",
      "2 earth runes and 2 law runes",
      "A rope and small fishing net",
      "A palm sapling and 15 papaya fruit",
      "A poison ivy seed, seed dibber, and rake",
      "5 mithril bars and a hammer",
      "25,000 coins to move your house to Yanille if needed",
      "Shield left half and shield right half",
      "Pure or daeyalt essence and Death Altar access",
    ],
    questsRequired: ["Legends' Quest", "Monkey Madness I", "Watchtower", "Plague City", "Mourning's End Part II"],
    skillsRequired: [
      { skill: "magic", level: 66, boostable: true },
      { skill: "thieving", level: 72, boostable: true },
      { skill: "hunter", level: 59, boostable: true },
      { skill: "farming", level: 70, boostable: true },
      { skill: "smithing", level: 68, boostable: true },
      { skill: "construction", level: 50, boostable: false },
      { skill: "runecraft", level: 65, boostable: true },
    ],
  },
  elite: {
    itemReward: "Ardougne cloak 4",
    rewards: {
      description: [
        {
          main: "Ardougne cloak 4",
          other: ["Unlimited teleports to the Ardougne farming patch"],
        },
        {
          main: "1 Antique lamp worth 50,000 experience in any skill of at least level 70",
          other: [],
        },
        {
          main: "Bert automatically sends 84 buckets of sand to your bank each day",
          other: [],
        },
        {
          main: "Wizard Cromperty gives 250 free noted pure essence each day",
          other: [],
        },
        {
          main: "50% more fish from Fishing Trawler and 25% more marks of grace from the Ardougne Rooftop Course",
          other: [],
        },
        {
          main: "Larger coin pouch capacity after completing the elite tier",
          other: [],
        },
      ],
      lamps: [{ amount: 1, experience: 50000, levelToUse: 70 }],
    },
    tasks: [
      {
        description: "Catch a manta ray in the Fishing Trawler and cook it in Port Khazard.",
        requirements: [skill("fishing", 81, false), skill("cooking", 91)],
        notes: "Bring or catch a raw manta ray and cook it in Port Khazard without resetting the task chain.",
      },
      {
        description: "Picklock the door to the basement of Yanille Agility Dungeon.",
        requirements: [skill("thieving", 82)],
        notes: "Bring a lockpick.",
      },
      {
        description: "Pickpocket a Hero.",
        requirements: [skill("thieving", 80)],
      },
      {
        description: "Make a rune crossbow yourself from scratch within Witchaven or Yanille.",
        requirements: [skill("crafting", 10), skill("smithing", 91), skill("fletching", 69)],
        notes: "Use the Witchaven spinning wheel for the string and the Yanille anvil for the limbs.",
      },
      {
        description: "Imbue a Salve amulet at Nightmare Zone, or equip one that was imbued there.",
        requirements: [quest("Haunted Mine")],
        notes: "Use a Salve amulet(i)/(ei) from Nightmare Zone, or earn enough points there to imbue one.",
      },
      {
        description: "Pick some torstol from the herb patch north of Ardougne.",
        requirements: [skill("farming", 85)],
        notes: "Bring a torstol seed, seed dibber, and rake.",
      },
      {
        description: "Complete a lap of Ardougne's rooftop agility course.",
        requirements: [skill("agility", 90)],
      },
      {
        description: "Cast Ice Barrage on another player within Castle Wars.",
        requirements: [quest("Desert Treasure I"), skill("magic", 94)],
        notes: "Bring runes for Ice Barrage or blighted ancient ice sacks and land the spell successfully.",
      },
    ],
    itemsRequired: [
      "A raw manta ray",
      "A lockpick",
      "Yew logs, a runite bar, a hammer, a knife, and sinew or a tree root",
      "A Salve amulet or enough Nightmare Zone points to imbue one",
      "A torstol seed, seed dibber, and rake",
      "Runes for Ice Barrage or blighted ancient ice sacks",
    ],
    questsRequired: ["Haunted Mine", "Desert Treasure I"],
    skillsRequired: [
      { skill: "fishing", level: 81, boostable: false },
      { skill: "cooking", level: 91, boostable: true },
      { skill: "thieving", level: 82, boostable: true },
      { skill: "crafting", level: 10, boostable: true },
      { skill: "smithing", level: 91, boostable: true },
      { skill: "fletching", level: 69, boostable: true },
      { skill: "farming", level: 85, boostable: true },
      { skill: "agility", level: 90, boostable: true },
      { skill: "magic", level: 94, boostable: true },
    ],
  },
};

export default ArdougneDiary;
