import { Item } from "../Item";

const BookOfWarPageSetData = {
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
    id: 13155,
    name: "Book of war page set"
  }
export const BookOfWarPageSet = Item.fromJson(BookOfWarPageSetData);
