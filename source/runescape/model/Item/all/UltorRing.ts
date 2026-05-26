import { Item } from "../Item";

const UltorRingData = {
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
    id: 28307,
    name: "Ultor ring"
  }
export const UltorRing = Item.fromJson(UltorRingData);
