import { Item } from "../Item";

const OakPyreLogsData = {
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
    id: 3440,
    name: "Oak pyre logs"
  }
export const OakPyreLogs = Item.fromJson(OakPyreLogsData);
