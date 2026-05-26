import { Item } from "../Item";

const MaskOfRanulData = {
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
    id: 23522,
    name: "Mask of ranul"
  }
export const MaskOfRanul = Item.fromJson(MaskOfRanulData);
