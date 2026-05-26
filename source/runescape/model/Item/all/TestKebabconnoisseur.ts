import { Item } from "../Item";

const TestKebabconnoisseurData = {
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
    id: 29898,
    name: "Test kebab#Connoisseur"
  }
export const TestKebabconnoisseur = Item.fromJson(TestKebabconnoisseurData);
