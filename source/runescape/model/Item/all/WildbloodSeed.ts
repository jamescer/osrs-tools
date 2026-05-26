import { Item } from "../Item";

const WildbloodSeedData = {
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
    id: 5311,
    name: "Wildblood seed"
  }
export const WildbloodSeed = Item.fromJson(WildbloodSeedData);
