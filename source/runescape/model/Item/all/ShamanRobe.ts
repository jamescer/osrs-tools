import { Item } from "../Item";

const ShamanRobeData = {
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
    id: 2397,
    name: "Shaman robe"
  }
export const ShamanRobe = Item.fromJson(ShamanRobeData);
