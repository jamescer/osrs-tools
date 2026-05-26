import { Item } from "../Item";

const ArgianBerriesData = {
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
    id: 28385,
    name: "Argian berries"
  }
export const ArgianBerries = Item.fromJson(ArgianBerriesData);
