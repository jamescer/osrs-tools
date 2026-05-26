import { Item } from "../Item";

const LogsAndKindlingData = {
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
    id: 21869,
    name: "Logs and kindling"
  }
export const LogsAndKindling = Item.fromJson(LogsAndKindlingData);
