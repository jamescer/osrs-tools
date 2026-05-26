import { Item } from "../Item";

const SulphurPotionData = {
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
    id: 25812,
    name: "Sulphur potion"
  }
export const SulphurPotion = Item.fromJson(SulphurPotionData);
