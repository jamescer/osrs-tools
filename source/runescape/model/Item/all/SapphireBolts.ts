import { Item } from "../Item";

const SapphireBoltsData = {
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
    id: 9337,
    name: "Sapphire bolts"
  }
export const SapphireBolts = Item.fromJson(SapphireBoltsData);
