import { Item } from "../Item";

const GnomeScarfData = {
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
    id: 9470,
    name: "Gnome scarf"
  }
export const GnomeScarf = Item.fromJson(GnomeScarfData);
