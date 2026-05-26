import { Item } from "../Item";

const PhoenixCrossbowData = {
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
    id: 767,
    name: "Phoenix crossbow"
  }
export const PhoenixCrossbow = Item.fromJson(PhoenixCrossbowData);
