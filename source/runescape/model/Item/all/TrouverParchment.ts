import { Item } from "../Item";

const TrouverParchmentData = {
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
    id: 24187,
    name: "Trouver parchment"
  }
export const TrouverParchment = Item.fromJson(TrouverParchmentData);
