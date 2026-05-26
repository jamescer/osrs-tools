import { Item } from "../Item";

const HolyWaterData = {
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
    id: 732,
    name: "Holy water"
  }
export const HolyWater = Item.fromJson(HolyWaterData);
