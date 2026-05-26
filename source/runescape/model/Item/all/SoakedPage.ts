import { Item } from "../Item";

const SoakedPageData = {
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
    id: 25578,
    name: "Soaked page"
  }
export const SoakedPage = Item.fromJson(SoakedPageData);
