import { Item } from "../Item";

const ArderMushroomData = {
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
    id: 28345,
    name: "Arder mushroom"
  }
export const ArderMushroom = Item.fromJson(ArderMushroomData);
