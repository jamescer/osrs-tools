import { Item } from "../Item";

const CrudeWoodenChairData = {
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
    id: 8309,
    name: "Crude wooden chair"
  }
export const CrudeWoodenChair = Item.fromJson(CrudeWoodenChairData);
