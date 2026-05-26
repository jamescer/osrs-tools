import { Item } from '../Item';

const blackPlatesLegsTData = {
    examine: "A suit of black leg armour, decorated with gold trim.",
    value: 7200,
    highAlch: 4320,
    lowAlch: 2880,
    weight: 9.75,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2004-01-15",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Black_platelegs_(t)",
    id: 3475,
    name: "Black platelegs (t)",
    iconUrl: "/assets/items/3475.png",
    defenceStab: 22,
    defenceSlash: 22,
    defenceCrush: 18,
    defenceRanged: 3,
    defenceMagic: 3
  }

export const BlackPlatelegsT = Item.fromJson(blackPlatesLegsTData);
