import { Item } from "../Item";

const EnchantedQuillData = {
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
    id: 21260,
    name: "Enchanted quill"
  }
export const EnchantedQuill = Item.fromJson(EnchantedQuillData);
