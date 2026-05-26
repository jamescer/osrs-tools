import { Item } from "../Item";

const SerafinasDiaryData = {
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
    id: 22504,
    name: "Serafina's diary"
  }
export const SerafinasDiary = Item.fromJson(SerafinasDiaryData);
