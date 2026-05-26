import { Item } from "../Item";

const GoldTiaraData = {
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
    id: 26788,
    name: "Gold tiara"
  }
export const GoldTiara = Item.fromJson(GoldTiaraData);
