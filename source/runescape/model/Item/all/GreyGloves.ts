import { Item } from "../Item";

const GreyGlovesData = {
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
    id: 2902,
    name: "Grey gloves"
  }
export const GreyGloves = Item.fromJson(GreyGlovesData);
