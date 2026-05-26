import { Item } from "../Item";

const BronzeBootsData = {
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
    id: 4119,
    name: "Bronze boots"
  }
export const BronzeBoots = Item.fromJson(BronzeBootsData);
