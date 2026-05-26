import { Item } from "../Item";

const DarkTotemData = {
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
    id: 19685,
    name: "Dark totem"
  }
export const DarkTotem = Item.fromJson(DarkTotemData);
