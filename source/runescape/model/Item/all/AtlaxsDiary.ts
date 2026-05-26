import { Item } from "../Item";

const AtlaxsDiaryData = {
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
    id: 26876,
    name: "Atlax's diary"
  }
export const AtlaxsDiary = Item.fromJson(AtlaxsDiaryData);
