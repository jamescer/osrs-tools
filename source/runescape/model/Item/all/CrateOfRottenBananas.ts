import { Item } from "../Item";

const CrateOfRottenBananasData = {
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
    id: 32599,
    name: "Crate of rotten bananas"
  }
export const CrateOfRottenBananas = Item.fromJson(CrateOfRottenBananasData);
