import { Item } from "../Item";

const FruitBlastData = {
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
    id: 2084,
    name: "Fruit blast"
  }
export const FruitBlast = Item.fromJson(FruitBlastData);
