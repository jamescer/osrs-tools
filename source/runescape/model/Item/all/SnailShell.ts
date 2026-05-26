import { Item } from "../Item";

const SnailShellData = {
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
    id: 7800,
    name: "Snail shell"
  }
export const SnailShell = Item.fromJson(SnailShellData);
