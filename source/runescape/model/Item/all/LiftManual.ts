import { Item } from "../Item";

const LiftManualData = {
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
    id: 7972,
    name: "Lift manual"
  }
export const LiftManual = Item.fromJson(LiftManualData);
