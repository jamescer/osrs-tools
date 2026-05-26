import { Item } from "../Item";

const TarnsDiaryData = {
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
    id: 10587,
    name: "Tarn's diary"
  }
export const TarnsDiary = Item.fromJson(TarnsDiaryData);
