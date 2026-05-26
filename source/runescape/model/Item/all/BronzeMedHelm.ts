import { Item } from "../Item";

const BronzeMedHelmData = {
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
    id: 1139,
    name: "Bronze med helm"
  }
export const BronzeMedHelm = Item.fromJson(BronzeMedHelmData);
