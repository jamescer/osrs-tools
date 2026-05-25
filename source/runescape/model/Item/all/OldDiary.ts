import { Item } from "../Item";

const OldDiaryData = {{
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
    id: 22411,
    name: "Old diary"
  }
export const OldDiary = Item.fromJson(OldDiaryData);