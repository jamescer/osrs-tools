import { Item } from "../Item";

const MagusIconData = {
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
    id: 28291,
    name: "Magus icon"
  }
export const MagusIcon = Item.fromJson(MagusIconData);
