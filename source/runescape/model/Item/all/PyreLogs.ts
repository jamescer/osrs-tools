import { Item } from "../Item";

const PyreLogsData = {
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
    id: 3438,
    name: "Pyre logs"
  }
export const PyreLogs = Item.fromJson(PyreLogsData);
