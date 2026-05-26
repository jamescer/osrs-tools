import { Item } from "../Item";

const EmptyFishFoodBoxData = {
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
    id: 6675,
    name: "Empty fish food box"
  }
export const EmptyFishFoodBox = Item.fromJson(EmptyFishFoodBoxData);
