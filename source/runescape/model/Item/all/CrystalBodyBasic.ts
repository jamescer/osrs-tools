import { Item } from "../Item";

const CrystalBodyBasicData = {{
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
    id: 23889,
    name: "Crystal body (basic)"
  }
export const CrystalBodyBasic = Item.fromJson(CrystalBodyBasicData);