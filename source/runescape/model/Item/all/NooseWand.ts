import { Item } from "../Item";

const NooseWandData = {
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
    id: 10150,
    name: "Noose wand"
  }
export const NooseWand = Item.fromJson(NooseWandData);
