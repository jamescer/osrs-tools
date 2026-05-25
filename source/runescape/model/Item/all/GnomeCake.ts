import { Item } from "../Item";

const GnomeCakeData = {{
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
    id: 27799,
    name: "Gnome cake"
  }
export const GnomeCake = Item.fromJson(GnomeCakeData);