import { Item } from "../Item";

const GoldenPheasantEggData = {
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
    id: 28663,
    name: "Golden pheasant egg"
  }
export const GoldenPheasantEgg = Item.fromJson(GoldenPheasantEggData);
