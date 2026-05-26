import { Item } from '../Item';

const oldDemonMaskData = {
    examine: "Lost in time.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Old_demon_mask",
    id: 20029,
    name: "Old demon mask",
    iconUrl: "/assets/items/20029.png"
  }

export const OldDemonMask = Item.fromJson(oldDemonMaskData);
