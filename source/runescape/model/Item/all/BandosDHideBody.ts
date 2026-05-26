import { Item } from '../Item';

const bandosDHideBodyData = {
    examine: "Bandos blessed dragonhide body armour.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_d'hide_body",
    id: 12500,
    name: "Bandos d'hide body",
    iconUrl: "/assets/items/12500.png"
  }

export const BandosDHideBody = Item.fromJson(bandosDHideBodyData);
