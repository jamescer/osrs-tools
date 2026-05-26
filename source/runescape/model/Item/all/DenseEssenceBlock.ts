import { Item } from "../Item";

const DenseEssenceBlockData = {
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
    id: 13445,
    name: "Dense essence block"
  }
export const DenseEssenceBlock = Item.fromJson(DenseEssenceBlockData);
