import { Item } from "../Item";

const ChurningMachineData = {
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
    id: 26935,
    name: "Churning machine"
  }
export const ChurningMachine = Item.fromJson(ChurningMachineData);
