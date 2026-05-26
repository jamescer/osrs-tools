import { Item } from "../Item";

const EmptyJugPackData = {
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
    id: 20742,
    name: "Empty jug pack"
  }
export const EmptyJugPack = Item.fromJson(EmptyJugPackData);
