import { Item } from "../Item";

const BlightedWaveSackData = {
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
    id: 26704,
    name: "Blighted wave sack"
  }
export const BlightedWaveSack = Item.fromJson(BlightedWaveSackData);
