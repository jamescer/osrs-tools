import { Item } from '../Item';

const bandosRobeTopData = {{
    examine: "Bandos Vestments.",
    value: 7000,
    highAlch: 4200,
    lowAlch: 2800,
    weight: 0,
    members: true,
    tradeable: true,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Bandos_robe_top",
    id: 12265,
    name: "Bandos robe top",
    iconUrl: "/assets/items/12265.png"
  }

export const BandosRobeTop = Item.fromJson(bandosRobeTopData);
