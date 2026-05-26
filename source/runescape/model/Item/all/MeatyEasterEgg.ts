import { Item } from "../Item";

const MeatyEasterEggData = {
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
    id: 21221,
    name: "Meaty easter egg"
  }
export const MeatyEasterEgg = Item.fromJson(MeatyEasterEggData);
