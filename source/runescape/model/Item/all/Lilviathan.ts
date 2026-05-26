import { Item } from "../Item";

const LilviathanData = {
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
    id: 28252,
    name: "Lil'viathan"
  }
export const Lilviathan = Item.fromJson(LilviathanData);
