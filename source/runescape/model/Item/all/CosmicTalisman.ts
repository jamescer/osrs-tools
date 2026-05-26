import { Item } from "../Item";

const CosmicTalismanData = {
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
    id: 1454,
    name: "Cosmic talisman"
  }
export const CosmicTalisman = Item.fromJson(CosmicTalismanData);
