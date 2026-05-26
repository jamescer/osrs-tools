import { Item } from "../Item";

const MushroomSporeData = {
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
    id: 5282,
    name: "Mushroom spore"
  }
export const MushroomSpore = Item.fromJson(MushroomSporeData);
