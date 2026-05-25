import { Item } from '../Item';

const ancientRobeTopData = {{
    examine: "Ancient Vestments.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Ancient_robe_top",
    id: 12193,
    name: "Ancient robe top",
    iconUrl: "/assets/items/12193.png"
  }

export const AncientRobeTop = Item.fromJson(ancientRobeTopData);
