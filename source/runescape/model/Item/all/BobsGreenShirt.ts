import { Item } from "../Item";

const BobsGreenShirtData = {
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
    id: 10320,
    name: "Bob's green shirt"
  }
export const BobsGreenShirt = Item.fromJson(BobsGreenShirtData);
