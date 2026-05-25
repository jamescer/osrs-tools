import { Item } from '../Item';

const royalCrownData = {{
    examine: "Who said I'd never be royal?",
    value: 6000,
    highAlch: 3600,
    lowAlch: 2400,
    weight: 0.453,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Royal_crown",
    id: 12397,
    name: "Royal crown",
    iconUrl: "/assets/items/12397.png"
  }

export const RoyalCrown = Item.fromJson(royalCrownData);
