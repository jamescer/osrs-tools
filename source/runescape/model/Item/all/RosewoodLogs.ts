import { Item } from "../Item";

const RosewoodLogsData = {
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
    id: 32910,
    name: "Rosewood logs"
  }
export const RosewoodLogs = Item.fromJson(RosewoodLogsData);
