import { Item } from "../Item";

const ArrowShaftData = {
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
    id: 52,
    name: "Arrow shaft"
  }
export const ArrowShaft = Item.fromJson(ArrowShaftData);
