import { Item } from "../Item";

const SeaweedSporeData = {
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
    id: 21490,
    name: "Seaweed spore"
  }
export const SeaweedSpore = Item.fromJson(SeaweedSporeData);
