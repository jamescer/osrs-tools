import { Item } from "../Item";

const BobsRedShirtData = {
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
    id: 10316,
    name: "Bob's red shirt"
  }
export const BobsRedShirt = Item.fromJson(BobsRedShirtData);
