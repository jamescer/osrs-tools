import { Item } from "../Item";

const BraveryPotionData = {{
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
    id: 739,
    name: "Bravery potion"
  }
export const BraveryPotion = Item.fromJson(BraveryPotionData);