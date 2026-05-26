import { Item } from "../Item";

const StripOfClothData = {
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
    id: 3224,
    name: "Strip of cloth"
  }
export const StripOfCloth = Item.fromJson(StripOfClothData);
