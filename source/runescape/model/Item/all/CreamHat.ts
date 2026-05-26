import { Item } from "../Item";

const CreamHatData = {
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
    id: 662,
    name: "Cream hat"
  }
export const CreamHat = Item.fromJson(CreamHatData);
