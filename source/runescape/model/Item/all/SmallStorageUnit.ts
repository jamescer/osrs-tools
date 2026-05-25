import { Item } from "../Item";

const SmallStorageUnitData = {{
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
    id: 21037,
    name: "Small storage unit"
  }
export const SmallStorageUnit = Item.fromJson(SmallStorageUnitData);