import { Item } from "../Item";

const GoldBowlData = {
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
    id: 721,
    name: "Gold bowl"
  }
export const GoldBowl = Item.fromJson(GoldBowlData);
