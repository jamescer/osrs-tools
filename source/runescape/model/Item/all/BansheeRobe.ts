import { Item } from "../Item";

const BansheeRobeData = {
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
    id: 20777,
    name: "Banshee robe"
  }
export const BansheeRobe = Item.fromJson(BansheeRobeData);
