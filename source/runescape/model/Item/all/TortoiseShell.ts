import { Item } from "../Item";

const TortoiseShellData = {
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
    id: 7939,
    name: "Tortoise shell"
  }
export const TortoiseShell = Item.fromJson(TortoiseShellData);
