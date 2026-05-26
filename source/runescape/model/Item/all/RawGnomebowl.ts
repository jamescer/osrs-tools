import { Item } from "../Item";

const RawGnomebowlData = {
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
    id: 2178,
    name: "Raw gnomebowl"
  }
export const RawGnomebowl = Item.fromJson(RawGnomebowlData);
