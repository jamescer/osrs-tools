import { Item } from '../Item';

const holyBlessingData = {{
    examine: "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.",
    value: 80,
    highAlch: 48,
    lowAlch: 32,
    weight: 0.51,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Equip",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Holy_blessing",
    id: 20220,
    name: "Holy blessing",
    iconUrl: "/assets/items/20220.png"
  }

export const HolyBlessing = Item.fromJson(holyBlessingData);
