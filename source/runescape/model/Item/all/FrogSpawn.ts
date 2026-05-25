import { Item } from "../Item";

const FrogSpawnData = {{
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
    id: 5004,
    name: "Frog spawn"
  }
export const FrogSpawn = Item.fromJson(FrogSpawnData);