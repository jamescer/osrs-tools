import { Item } from "../Item";

const MagicOgrePotionData = {
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
    id: 2395,
    name: "Magic ogre potion"
  }
export const MagicOgrePotion = Item.fromJson(MagicOgrePotionData);
