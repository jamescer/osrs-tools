import { Item } from "../Item";

const RingOfLifeData = {
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
    id: 2570,
    name: "Ring of life"
  }
export const RingOfLife = Item.fromJson(RingOfLifeData);
