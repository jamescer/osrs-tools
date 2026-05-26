import { Item } from "../Item";

const HolySheetData = {
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
    id: 32434,
    name: "Holy sheet"
  }
export const HolySheet = Item.fromJson(HolySheetData);
