import { Item } from "../Item";

const NestHatchickData = {
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
    id: 27877,
    name: "Nest hat#Chick"
  }
export const NestHatchick = Item.fromJson(NestHatchickData);
