import { Item } from "../Item";

const RedSweetsData = {
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
    id: 4562,
    name: "Red sweets"
  }
export const RedSweets = Item.fromJson(RedSweetsData);
