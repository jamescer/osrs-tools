import { Item } from "../Item";

const CarvedGemData = {
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
    id: 21716,
    name: "Carved gem"
  }
export const CarvedGem = Item.fromJson(CarvedGemData);
