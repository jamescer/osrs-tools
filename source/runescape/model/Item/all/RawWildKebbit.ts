import { Item } from "../Item";

const RawWildKebbitData = {
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
    id: 29104,
    name: "Raw wild kebbit"
  }
export const RawWildKebbit = Item.fromJson(RawWildKebbitData);
