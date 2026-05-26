import { Item } from "../Item";

const ConchShellData = {
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
    id: 24543,
    name: "Conch shell"
  }
export const ConchShell = Item.fromJson(ConchShellData);
