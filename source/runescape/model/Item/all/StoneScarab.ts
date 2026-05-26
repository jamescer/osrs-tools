import { Item } from "../Item";

const StoneScarabData = {
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
    id: 9030,
    name: "Stone scarab"
  }
export const StoneScarab = Item.fromJson(StoneScarabData);
