import { Item } from "../Item";

const BrokenPlateData = {
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
    id: 4614,
    name: "Broken plate"
  }
export const BrokenPlate = Item.fromJson(BrokenPlateData);
