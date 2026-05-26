import { Item } from "../Item";

const DragonMedHelmData = {
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
    id: 1149,
    name: "Dragon med helm"
  }
export const DragonMedHelm = Item.fromJson(DragonMedHelmData);
