import { Item } from "../Item";

const BookOfDarknessData = {
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
    id: 12612,
    name: "Book of darkness"
  }
export const BookOfDarkness = Item.fromJson(BookOfDarknessData);
