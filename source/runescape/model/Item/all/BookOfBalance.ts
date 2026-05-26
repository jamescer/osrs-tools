import { Item } from "../Item";

const BookOfBalanceData = {
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
    id: 3844,
    name: "Book of balance"
  }
export const BookOfBalance = Item.fromJson(BookOfBalanceData);
