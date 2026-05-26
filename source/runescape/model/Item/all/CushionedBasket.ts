import { Item } from "../Item";

const CushionedBasketData = {
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
    id: 8238,
    name: "Cushioned basket"
  }
export const CushionedBasket = Item.fromJson(CushionedBasketData);
