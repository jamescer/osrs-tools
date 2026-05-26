import { Item } from "../Item";

const FairyMushroomData = {
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
    id: 25102,
    name: "Fairy mushroom"
  }
export const FairyMushroom = Item.fromJson(FairyMushroomData);
