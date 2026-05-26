import { Item } from "../Item";

const BottleOfMistData = {
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
    id: 28805,
    name: "Bottle of mist"
  }
export const BottleOfMist = Item.fromJson(BottleOfMistData);
