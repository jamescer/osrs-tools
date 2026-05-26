import { Item } from "../Item";

const MushroomOnionData = {
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
    id: 7066,
    name: "Mushroom & onion"
  }
export const MushroomOnion = Item.fromJson(MushroomOnionData);
