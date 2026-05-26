import { Item } from "../Item";

const JewelOfAmascutData = {
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
    id: 30893,
    name: "Jewel of amascut"
  }
export const JewelOfAmascut = Item.fromJson(JewelOfAmascutData);
