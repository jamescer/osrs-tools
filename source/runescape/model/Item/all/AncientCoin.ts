import { Item } from "../Item";

const AncientCoinData = {
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
    id: 11180,
    name: "Ancient coin"
  }
export const AncientCoin = Item.fromJson(AncientCoinData);
