import { Item } from "../Item";

const BloodPotionData = {
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
    id: 22407,
    name: "Blood potion"
  }
export const BloodPotion = Item.fromJson(BloodPotionData);
