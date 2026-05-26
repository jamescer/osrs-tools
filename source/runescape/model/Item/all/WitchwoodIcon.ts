import { Item } from "../Item";

const WitchwoodIconData = {
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
    id: 8923,
    name: "Witchwood icon"
  }
export const WitchwoodIcon = Item.fromJson(WitchwoodIconData);
