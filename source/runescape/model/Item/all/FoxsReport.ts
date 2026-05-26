import { Item } from "../Item";

const FoxsReportData = {
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
    id: 28983,
    name: "Fox's report"
  }
export const FoxsReport = Item.fromJson(FoxsReportData);
