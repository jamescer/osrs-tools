import { Item } from "../Item";

const GreyBootsData = {
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
    id: 2894,
    name: "Grey boots"
  }
export const GreyBoots = Item.fromJson(GreyBootsData);
