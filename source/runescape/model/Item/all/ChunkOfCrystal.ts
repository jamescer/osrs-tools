import { Item } from "../Item";

const ChunkOfCrystalData = {
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
    id: 741,
    name: "Chunk of crystal"
  }
export const ChunkOfCrystal = Item.fromJson(ChunkOfCrystalData);
