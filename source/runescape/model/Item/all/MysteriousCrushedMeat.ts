import { Item } from "../Item";

const MysteriousCrushedMeatData = {
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
    id: 22404,
    name: "Mysterious crushed meat"
  }
export const MysteriousCrushedMeat = Item.fromJson(MysteriousCrushedMeatData);
