import { Item } from "../Item";

const GnomeSpiceData = {{
    examine: "",
    value: 0,
    highAlch: 0,
    lowAlch: 0,
    weight: 0,
    members: false,
    tradeable: false,
    equipable: false,
    releaseDate: "",
    destroy: "Drop",
    questItem: false,
    stackable: false,
    noted: false,
    officialWikiUrl: "",
    id: 2169,
    name: "Gnome spice"
  }
export const GnomeSpice = Item.fromJson(GnomeSpiceData);