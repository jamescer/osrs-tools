import { Item } from "../Item";

const GoldenHammerData = {
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
    id: 2949,
    name: "Golden hammer"
  }
export const GoldenHammer = Item.fromJson(GoldenHammerData);
