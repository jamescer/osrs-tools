import { Item } from "../Item";

const GemBagclosedData = {
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
    id: 12020,
    name: "Gem bag#Closed"
  }
export const GemBagclosed = Item.fromJson(GemBagclosedData);
