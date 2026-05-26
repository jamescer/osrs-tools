import { Item } from "../Item";

const BoxingRingData = {
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
    id: 8023,
    name: "Boxing ring"
  }
export const BoxingRing = Item.fromJson(BoxingRingData);
