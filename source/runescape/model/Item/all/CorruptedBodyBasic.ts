import { Item } from "../Item";

const CorruptedBodyBasicData = {
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
    id: 23843,
    name: "Corrupted body (basic)"
  }
export const CorruptedBodyBasic = Item.fromJson(CorruptedBodyBasicData);
