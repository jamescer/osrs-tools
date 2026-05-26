import { Item } from "../Item";

const VarlamorianKebabData = {
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
    id: 29900,
    name: "Varlamorian kebab"
  }
export const VarlamorianKebab = Item.fromJson(VarlamorianKebabData);
