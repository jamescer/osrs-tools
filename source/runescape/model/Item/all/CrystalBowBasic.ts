import { Item } from "../Item";

const CrystalBowBasicData = {{
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
    id: 23901,
    name: "Crystal bow (basic)"
  }
export const CrystalBowBasic = Item.fromJson(CrystalBowBasicData);