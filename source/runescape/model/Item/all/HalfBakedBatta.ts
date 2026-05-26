import { Item } from "../Item";

const HalfBakedBattaData = {
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
    id: 2249,
    name: "Half baked batta"
  }
export const HalfBakedBatta = Item.fromJson(HalfBakedBattaData);
