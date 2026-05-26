import { Item } from "../Item";

const BrokenCauldronData = {
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
    id: 9591,
    name: "Broken cauldron"
  }
export const BrokenCauldron = Item.fromJson(BrokenCauldronData);
