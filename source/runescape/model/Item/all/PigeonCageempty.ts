import { Item } from "../Item";

const PigeonCageemptyData = {
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
    id: 425,
    name: "Pigeon cage#Empty"
  }
export const PigeonCageempty = Item.fromJson(PigeonCageemptyData);
