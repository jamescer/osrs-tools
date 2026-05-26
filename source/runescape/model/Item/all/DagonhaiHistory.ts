import { Item } from "../Item";

const DagonhaiHistoryData = {
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
    id: 11001,
    name: "Dagon'hai history"
  }
export const DagonhaiHistory = Item.fromJson(DagonhaiHistoryData);
