import { Item } from "../Item";

const CrateOfProtectiveClothingData = {
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
    id: 32730,
    name: "Crate of protective clothing"
  }
export const CrateOfProtectiveClothing = Item.fromJson(CrateOfProtectiveClothingData);
