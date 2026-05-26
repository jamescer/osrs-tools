import { Item } from "../Item";

const AdamantMedHelmData = {
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
    id: 1145,
    name: "Adamant med helm"
  }
export const AdamantMedHelm = Item.fromJson(AdamantMedHelmData);
