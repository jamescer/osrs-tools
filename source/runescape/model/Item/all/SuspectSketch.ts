import { Item } from "../Item";

const SuspectSketchData = {
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
    id: 29533,
    name: "Suspect sketch"
  }
export const SuspectSketch = Item.fromJson(SuspectSketchData);
