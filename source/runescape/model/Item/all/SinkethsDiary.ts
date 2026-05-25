import { Item } from "../Item";

const SinkethsDiaryData = {{
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
    id: 11002,
    name: "Sin'keth's diary"
  }
export const SinkethsDiary = Item.fromJson(SinkethsDiaryData);