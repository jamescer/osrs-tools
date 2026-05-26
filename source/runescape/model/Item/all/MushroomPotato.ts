import { Item } from "../Item";

const MushroomPotatoData = {
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
    id: 7058,
    name: "Mushroom potato"
  }
export const MushroomPotato = Item.fromJson(MushroomPotatoData);
