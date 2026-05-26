import { Item } from "../Item";

const UnsanitarySwillData = {
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
    id: 6719,
    name: "Unsanitary swill"
  }
export const UnsanitarySwill = Item.fromJson(UnsanitarySwillData);
