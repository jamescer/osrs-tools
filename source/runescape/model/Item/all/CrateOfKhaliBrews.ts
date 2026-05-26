import { Item } from "../Item";

const CrateOfKhaliBrewsData = {
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
    id: 32525,
    name: "Crate of khali brews"
  }
export const CrateOfKhaliBrews = Item.fromJson(CrateOfKhaliBrewsData);
