import { Item } from '../Item';

const guthixRobeTopData = {{
    examine: "Guthix Vestments.",
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
    officialWikiUrl: "https://oldschool.runescape.wiki/w/Guthix_robe_top",
    id: 10462,
    name: "Guthix robe top",
    iconUrl: "/assets/items/10462.png"
  }

export const GuthixRobeTop = Item.fromJson(guthixRobeTopData);
