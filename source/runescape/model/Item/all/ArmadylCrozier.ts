import { Item } from '../Item';

const armadylCrozierData = {
    examine: "An Armadyl crozier.",
    value: 5000,
    highAlch: 3000,
    lowAlch: 2000,
    weight: 2,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wield",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_crozier",
    id: 12263,
    name: "Armadyl crozier",
    iconUrl: "/assets/items/12263.png"
  }

export const ArmadylCrozier = Item.fromJson(armadylCrozierData);
