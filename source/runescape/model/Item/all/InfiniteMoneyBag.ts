import { Item } from "../Item";

const InfiniteMoneyBagData = {
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
    id: 27440,
    name: "Infinite money bag"
  }
export const InfiniteMoneyBag = Item.fromJson(InfiniteMoneyBagData);
