import { Item } from "../Item";

const MurkyPotionData = {
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
    id: 21711,
    name: "Murky potion"
  }
export const MurkyPotion = Item.fromJson(MurkyPotionData);
