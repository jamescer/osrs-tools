import { Item } from "../Item";

const GlarialsPebbleData = {
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
    id: 294,
    name: "Glarial's pebble"
  }
export const GlarialsPebble = Item.fromJson(GlarialsPebbleData);
