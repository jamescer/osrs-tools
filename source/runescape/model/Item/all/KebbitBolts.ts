import { Item } from "../Item";

const KebbitBoltsData = {
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
    id: 10158,
    name: "Kebbit bolts"
  }
export const KebbitBolts = Item.fromJson(KebbitBoltsData);
