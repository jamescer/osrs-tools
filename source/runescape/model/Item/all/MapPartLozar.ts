import { Item } from "../Item";

const MapPartLozarData = {
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
    id: 1536,
    name: "Map part (Lozar)"
  }
export const MapPartLozar = Item.fromJson(MapPartLozarData);
