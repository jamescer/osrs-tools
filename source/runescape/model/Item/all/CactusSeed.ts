import { Item } from "../Item";

const CactusSeedData = {
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
    id: 5280,
    name: "Cactus seed"
  }
export const CactusSeed = Item.fromJson(CactusSeedData);
