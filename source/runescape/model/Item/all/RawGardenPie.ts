import { Item } from "../Item";

const RawGardenPieData = {
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
    id: 7176,
    name: "Raw garden pie"
  }
export const RawGardenPie = Item.fromJson(RawGardenPieData);
