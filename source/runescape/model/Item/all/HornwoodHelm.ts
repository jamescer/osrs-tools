import { Item } from "../Item";

const HornwoodHelmData = {
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
    id: 19699,
    name: "Hornwood helm"
  }
export const HornwoodHelm = Item.fromJson(HornwoodHelmData);
