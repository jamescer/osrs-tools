import { Item } from "../Item";

const RottenPotatoData = {
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
    id: 5733,
    name: "Rotten potato"
  }
export const RottenPotato = Item.fromJson(RottenPotatoData);
