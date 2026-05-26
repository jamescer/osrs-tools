import { Item } from "../Item";

const BowlOfHotWaterData = {
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
    id: 4456,
    name: "Bowl of hot water"
  }
export const BowlOfHotWater = Item.fromJson(BowlOfHotWaterData);
