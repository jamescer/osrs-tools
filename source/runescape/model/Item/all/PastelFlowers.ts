import { Item } from "../Item";

const PastelFlowersData = {
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
    id: 25609,
    name: "Pastel flowers"
  }
export const PastelFlowers = Item.fromJson(PastelFlowersData);
