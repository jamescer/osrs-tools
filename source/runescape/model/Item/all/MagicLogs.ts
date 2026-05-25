import { Item } from "../Item";

const MagicLogsData = {{
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
    id: 1513,
    name: "Magic logs"
  }
export const MagicLogs = Item.fromJson(MagicLogsData);