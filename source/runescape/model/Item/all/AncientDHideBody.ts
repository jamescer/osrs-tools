import { Item } from '../Item';

const ancientDHideBodyData = {
    examine: "Ancient blessed dragonhide body armour.",
    value: 13000,
    highAlch: 7800,
    lowAlch: 5200,
    weight: 6,
    members: true,
    tradeable: true,
    equipable: true,
    releaseDate: "2014-06-12",
    destroy: "Wear",
    questItem: false,
    stackable: false,
    noted: true,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_d'hide_body",
    id: 12492,
    name: "Ancient d'hide body",
    iconUrl: "/assets/items/12492.png"
  }

export const AncientDHideBody = Item.fromJson(ancientDHideBodyData);
