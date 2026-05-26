import { Item } from "../Item";

const BronzeMaceData = {
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
    id: 1422,
    name: "Bronze mace"
  }
export const BronzeMace = Item.fromJson(BronzeMaceData);
