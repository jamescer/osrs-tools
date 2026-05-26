import { Item } from "../Item";

const NeutralisingPotionData = {
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
    id: 27297,
    name: "Neutralising potion"
  }
export const NeutralisingPotion = Item.fromJson(NeutralisingPotionData);
