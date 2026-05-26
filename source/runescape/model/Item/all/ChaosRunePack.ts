import { Item } from "../Item";

const ChaosRunePackData = {
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
    id: 12738,
    name: "Chaos rune pack"
  }
export const ChaosRunePack = Item.fromJson(ChaosRunePackData);
