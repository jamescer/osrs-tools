import { Item } from "../Item";

const GoldenGoblinData = {
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
    id: 11210,
    name: "Golden goblin"
  }
export const GoldenGoblin = Item.fromJson(GoldenGoblinData);
