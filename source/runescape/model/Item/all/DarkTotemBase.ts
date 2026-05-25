import { Item } from "../Item";

const DarkTotemBaseData = {{
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
    id: 19679,
    name: "Dark totem base"
  }
export const DarkTotemBase = Item.fromJson(DarkTotemBaseData);