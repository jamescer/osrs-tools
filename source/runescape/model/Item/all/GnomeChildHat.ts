import { Item } from "../Item";

const GnomeChildHatData = {
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
    id: 13655,
    name: "Gnome child hat"
  }
export const GnomeChildHat = Item.fromJson(GnomeChildHatData);
