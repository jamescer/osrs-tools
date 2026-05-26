import { Item } from "../Item";

const OsmansReportData = {
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
    id: 26602,
    name: "Osman's report"
  }
export const OsmansReport = Item.fromJson(OsmansReportData);
