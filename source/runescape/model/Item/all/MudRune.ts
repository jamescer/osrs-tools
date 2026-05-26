import { Item } from "../Item";

const MudRuneData = {
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
    id: 4698,
    name: "Mud rune"
  }
export const MudRune = Item.fromJson(MudRuneData);
