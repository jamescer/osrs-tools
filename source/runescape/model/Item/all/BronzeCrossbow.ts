import { Item } from "../Item";

const BronzeCrossbowData = {
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
    id: 9174,
    name: "Bronze crossbow"
  }
export const BronzeCrossbow = Item.fromJson(BronzeCrossbowData);
