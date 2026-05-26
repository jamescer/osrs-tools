import { Item } from "../Item";

const CorruptedBowPerfectedData = {
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
    id: 23857,
    name: "Corrupted bow (perfected)"
  }
export const CorruptedBowPerfected = Item.fromJson(CorruptedBowPerfectedData);
