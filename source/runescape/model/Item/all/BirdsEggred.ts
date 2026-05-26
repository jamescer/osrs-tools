import { Item } from "../Item";

const BirdsEggredData = {
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
    id: 5076,
    name: "Bird's egg#Red"
  }
export const BirdsEggred = Item.fromJson(BirdsEggredData);
