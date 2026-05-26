import { Item } from "../Item";

const BottledStormData = {
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
    id: 31949,
    name: "Bottled storm"
  }
export const BottledStorm = Item.fromJson(BottledStormData);
