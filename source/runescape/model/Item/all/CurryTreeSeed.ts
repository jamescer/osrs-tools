import { Item } from "../Item";

const CurryTreeSeedData = {
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
    id: 5286,
    name: "Curry tree seed"
  }
export const CurryTreeSeed = Item.fromJson(CurryTreeSeedData);
