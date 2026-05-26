import { Item } from "../Item";

const BoxTrapPackData = {
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
    id: 12742,
    name: "Box trap pack"
  }
export const BoxTrapPack = Item.fromJson(BoxTrapPackData);
