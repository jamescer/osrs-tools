import { Item } from "../Item";

const MonkeyNutsData = {
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
    id: 4012,
    name: "Monkey nuts"
  }
export const MonkeyNuts = Item.fromJson(MonkeyNutsData);
