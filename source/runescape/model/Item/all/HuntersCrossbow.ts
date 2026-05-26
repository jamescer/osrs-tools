import { Item } from "../Item";

const HuntersCrossbowData = {
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
    id: 10156,
    name: "Hunters' crossbow"
  }
export const HuntersCrossbow = Item.fromJson(HuntersCrossbowData);
