import { Item } from "../Item";

const SteelPickHeadData = {
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
    id: 484,
    name: "Steel pick head"
  }
export const SteelPickHead = Item.fromJson(SteelPickHeadData);
