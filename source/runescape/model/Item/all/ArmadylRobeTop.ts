import { Item } from '../Item';

const armadylRobeTopData = {
    examine: "Armadyl Vestments.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Armadyl_robe_top",
    id: 12253,
    name: "Armadyl robe top",
    iconUrl: "/assets/items/12253.png"
  }

export const ArmadylRobeTop = Item.fromJson(armadylRobeTopData);
