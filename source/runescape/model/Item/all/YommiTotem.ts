import { Item } from "../Item";

const YommiTotemData = {
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
    id: 749,
    name: "Yommi totem"
  }
export const YommiTotem = Item.fromJson(YommiTotemData);
