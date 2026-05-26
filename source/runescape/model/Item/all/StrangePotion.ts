import { Item } from "../Item";

const StrangePotionData = {
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
    id: 4836,
    name: "Strange potion"
  }
export const StrangePotion = Item.fromJson(StrangePotionData);
