import { Item } from "../Item";

const SteelFellingAxeData = {
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
    id: 28202,
    name: "Steel felling axe"
  }
export const SteelFellingAxe = Item.fromJson(SteelFellingAxeData);
