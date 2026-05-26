import { Item } from "../Item";

const EyeOfGnomeData = {
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
    id: 4008,
    name: "Eye of gnome"
  }
export const EyeOfGnome = Item.fromJson(EyeOfGnomeData);
