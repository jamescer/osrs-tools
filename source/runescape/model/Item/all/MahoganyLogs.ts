import { Item } from "../Item";

const MahoganyLogsData = {
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
    id: 6332,
    name: "Mahogany logs"
  }
export const MahoganyLogs = Item.fromJson(MahoganyLogsData);
