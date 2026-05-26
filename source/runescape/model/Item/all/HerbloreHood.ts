import { Item } from "../Item";

const HerbloreHoodData = {
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
    id: 9776,
    name: "Herblore hood"
  }
export const HerbloreHood = Item.fromJson(HerbloreHoodData);
