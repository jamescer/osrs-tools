import { Item } from "../Item";

const SandstoneBaseData = {
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
    id: 6988,
    name: "Sandstone base"
  }
export const SandstoneBase = Item.fromJson(SandstoneBaseData);
