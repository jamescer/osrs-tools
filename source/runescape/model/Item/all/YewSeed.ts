import { Item } from '../Item';

const yewSeedData = {{
    examine: "Plant this in a plantpot of soil to grow a sapling.",
    value: 143,
    highAlch: 85,
    lowAlch: 57,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "2005-06-06",
    destroy: "Drop",
    questItem: false,
    stackable: true,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Yew_seed",
    id: 5315,
    name: "Yew seed",
    iconUrl: "/assets/items/5315.png"
  }

export const YewSeed = Item.fromJson(yewSeedData);
