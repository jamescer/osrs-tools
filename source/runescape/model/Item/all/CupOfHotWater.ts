import { Item } from "../Item";

const CupOfHotWaterData = {
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
    id: 4460,
    name: "Cup of hot water"
  }
export const CupOfHotWater = Item.fromJson(CupOfHotWaterData);
