import { Item } from "../Item";

const BobsPurpleShirtData = {
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
    id: 10324,
    name: "Bob's purple shirt"
  }
export const BobsPurpleShirt = Item.fromJson(BobsPurpleShirtData);
