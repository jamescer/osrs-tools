import { Item } from "../Item";

const SnakeBasketData = {{
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
    id: 4606,
    name: "Snake basket"
  }
export const SnakeBasket = Item.fromJson(SnakeBasketData);