import { Item } from "../Item";

const BaggedFlowerData = {{
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
    id: 8451,
    name: "Bagged flower"
  }
export const BaggedFlower = Item.fromJson(BaggedFlowerData);