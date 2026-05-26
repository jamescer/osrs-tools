import { Item } from "../Item";

const GreenSweetsData = {
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
    id: 4563,
    name: "Green sweets"
  }
export const GreenSweets = Item.fromJson(GreenSweetsData);
