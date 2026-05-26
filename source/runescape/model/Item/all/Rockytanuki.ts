import { Item } from "../Item";

const RockytanukiData = {
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
    id: 24849,
    name: "Rocky#Tanuki"
  }
export const Rockytanuki = Item.fromJson(RockytanukiData);
