import { Item } from "../Item";

const RosesDiaryData = {{
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
    id: 25802,
    name: "Rose's diary"
  }
export const RosesDiary = Item.fromJson(RosesDiaryData);