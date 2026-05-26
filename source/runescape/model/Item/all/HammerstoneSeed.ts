import { Item } from "../Item";

const HammerstoneSeedData = {
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
    id: 5307,
    name: "Hammerstone seed"
  }
export const HammerstoneSeed = Item.fromJson(HammerstoneSeedData);
