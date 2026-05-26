import { Item } from "../Item";

const CoconutShellData = {
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
    id: 5978,
    name: "Coconut shell"
  }
export const CoconutShell = Item.fromJson(CoconutShellData);
