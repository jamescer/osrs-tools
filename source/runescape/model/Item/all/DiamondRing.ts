import { Item } from "../Item";

const DiamondRingData = {
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
    id: 1643,
    name: "Diamond ring"
  }
export const DiamondRing = Item.fromJson(DiamondRingData);
