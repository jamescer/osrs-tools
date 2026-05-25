import { Item } from "../Item";

const DreamPotionData = {{
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
    id: 11154,
    name: "Dream potion"
  }
export const DreamPotion = Item.fromJson(DreamPotionData);