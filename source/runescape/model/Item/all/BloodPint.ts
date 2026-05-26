import { Item } from "../Item";

const BloodPintData = {
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
    id: 24774,
    name: "Blood pint"
  }
export const BloodPint = Item.fromJson(BloodPintData);
