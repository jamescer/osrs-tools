import { Item } from "../Item";

const MudPieData = {
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
    id: 7170,
    name: "Mud pie"
  }
export const MudPie = Item.fromJson(MudPieData);
