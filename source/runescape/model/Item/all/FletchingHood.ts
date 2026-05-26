import { Item } from "../Item";

const FletchingHoodData = {
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
    id: 9785,
    name: "Fletching hood"
  }
export const FletchingHood = Item.fromJson(FletchingHoodData);
