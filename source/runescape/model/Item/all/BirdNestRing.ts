import { Item } from "../Item";

const BirdNestRingData = {
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
    id: 5074,
    name: "Bird nest (ring)"
  }
export const BirdNestRing = Item.fromJson(BirdNestRingData);
