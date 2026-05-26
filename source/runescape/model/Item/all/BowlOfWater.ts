import { Item } from "../Item";

const BowlOfWaterData = {
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
    id: 1921,
    name: "Bowl of water"
  }
export const BowlOfWater = Item.fromJson(BowlOfWaterData);
