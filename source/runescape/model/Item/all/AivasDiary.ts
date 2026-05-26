import { Item } from "../Item";

const AivasDiaryData = {
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
    id: 22033,
    name: "Aivas' diary"
  }
export const AivasDiary = Item.fromJson(AivasDiaryData);
