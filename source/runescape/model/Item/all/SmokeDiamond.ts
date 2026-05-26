import { Item } from "../Item";

const SmokeDiamondData = {
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
    id: 4672,
    name: "Smoke diamond"
  }
export const SmokeDiamond = Item.fromJson(SmokeDiamondData);
