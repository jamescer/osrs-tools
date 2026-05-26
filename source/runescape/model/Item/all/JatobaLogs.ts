import { Item } from "../Item";

const JatobaLogsData = {
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
    id: 32902,
    name: "Jatoba logs"
  }
export const JatobaLogs = Item.fromJson(JatobaLogsData);
