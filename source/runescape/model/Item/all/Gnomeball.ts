import { Item } from "../Item";

const GnomeballData = {
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
    id: 751,
    name: "Gnomeball"
  }
export const Gnomeball = Item.fromJson(GnomeballData);
