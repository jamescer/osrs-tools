import { Item } from "../Item";

const MissionReportArdougneData = {
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
    id: 10597,
    name: "Mission report (Ardougne)"
  }
export const MissionReportArdougne = Item.fromJson(MissionReportArdougneData);
