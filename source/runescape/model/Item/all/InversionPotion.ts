import { Item } from "../Item";

const InversionPotionData = {
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
    id: 23806,
    name: "Inversion potion"
  }
export const InversionPotion = Item.fromJson(InversionPotionData);
