import { Item } from "../Item";

const FencingRingData = {
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
    id: 8024,
    name: "Fencing ring"
  }
export const FencingRing = Item.fromJson(FencingRingData);
