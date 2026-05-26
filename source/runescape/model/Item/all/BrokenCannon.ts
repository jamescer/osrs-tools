import { Item } from "../Item";

const BrokenCannonData = {
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
    id: 7146,
    name: "Broken cannon"
  }
export const BrokenCannon = Item.fromJson(BrokenCannonData);
