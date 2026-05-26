import { Item } from "../Item";

const CorruptedHelmPerfectedData = {
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
    id: 23842,
    name: "Corrupted helm (perfected)"
  }
export const CorruptedHelmPerfected = Item.fromJson(CorruptedHelmPerfectedData);
