import { Item } from "../Item";

const OrnateBootsData = {
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
    id: 23093,
    name: "Ornate boots"
  }
export const OrnateBoots = Item.fromJson(OrnateBootsData);
