import { Item } from "../Item";

const FrozenChurningMachineData = {
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
    id: 26936,
    name: "Frozen churning machine"
  }
export const FrozenChurningMachine = Item.fromJson(FrozenChurningMachineData);
