import { Item } from "../Item";

const RawKyattData = {{
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
    id: 29125,
    name: "Raw kyatt"
  }
export const RawKyatt = Item.fromJson(RawKyattData);