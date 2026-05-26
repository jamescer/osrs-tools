import { Item } from "../Item";

const SapphireRingData = {
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
    id: 1637,
    name: "Sapphire ring"
  }
export const SapphireRing = Item.fromJson(SapphireRingData);
