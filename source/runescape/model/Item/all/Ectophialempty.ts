import { Item } from "../Item";

const EctophialemptyData = {
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
    id: 4252,
    name: "Ectophial#Empty"
  }
export const Ectophialempty = Item.fromJson(EctophialemptyData);
