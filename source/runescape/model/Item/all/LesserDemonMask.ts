import { Item } from '../Item';

const lesserDemonMaskData = {{
    examine: "Evil.",
    value: 4000,
    highAlch: 2400,
    lowAlch: 1600,
    weight: 0.8,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2016-07-06",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Lesser_demon_mask",
    id: 20020,
    name: "Lesser demon mask",
    iconUrl: "/assets/items/20020.png"
  }

export const LesserDemonMask = Item.fromJson(lesserDemonMaskData);
