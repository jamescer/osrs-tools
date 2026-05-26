import { Item } from "../Item";

const ChoppedTomatoData = {
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
    id: 1869,
    name: "Chopped tomato"
  }
export const ChoppedTomato = Item.fromJson(ChoppedTomatoData);
