import { Item } from "../Item";

const BlisterwoodLogsData = {
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
    id: 24691,
    name: "Blisterwood logs"
  }
export const BlisterwoodLogs = Item.fromJson(BlisterwoodLogsData);
