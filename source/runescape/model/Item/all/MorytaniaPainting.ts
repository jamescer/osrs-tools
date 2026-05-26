import { Item } from "../Item";

const MorytaniaPaintingData = {
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
    id: 8291,
    name: "Morytania (painting)"
  }
export const MorytaniaPainting = Item.fromJson(MorytaniaPaintingData);
