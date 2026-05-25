import { Item } from "../Item";

const TrollPotionData = {{
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
    id: 3265,
    name: "Troll potion"
  }
export const TrollPotion = Item.fromJson(TrollPotionData);