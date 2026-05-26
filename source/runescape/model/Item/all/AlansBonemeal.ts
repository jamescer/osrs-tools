import { Item } from "../Item";

const AlansBonemealData = {
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
    id: 30975,
    name: "Alan's bonemeal"
  }
export const AlansBonemeal = Item.fromJson(AlansBonemealData);
