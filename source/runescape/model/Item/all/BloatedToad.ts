import { Item } from "../Item";

const BloatedToadData = {
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
    id: 2875,
    name: "Bloated toad"
  }
export const BloatedToad = Item.fromJson(BloatedToadData);
