import { Item } from "../Item";

const WeatherReportData = {
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
    id: 4435,
    name: "Weather report"
  }
export const WeatherReport = Item.fromJson(WeatherReportData);
