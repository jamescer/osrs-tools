import { Item } from "../Item";

const GreenmanMaskdefaultData = {
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
    id: 31034,
    name: "Greenman mask#Default"
  }
export const GreenmanMaskdefault = Item.fromJson(GreenmanMaskdefaultData);
