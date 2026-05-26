import { Item } from "../Item";

const SpicyWormData = {
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
    id: 2160,
    name: "Spicy worm"
  }
export const SpicyWorm = Item.fromJson(SpicyWormData);
