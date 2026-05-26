import { Item } from "../Item";

const BlueLogsData = {
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
    id: 7406,
    name: "Blue logs"
  }
export const BlueLogs = Item.fromJson(BlueLogsData);
