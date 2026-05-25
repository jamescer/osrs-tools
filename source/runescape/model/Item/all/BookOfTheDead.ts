import { Item } from "../Item";

const BookOfTheDeadData = {{
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
    id: 25818,
    name: "Book of the dead"
  }
export const BookOfTheDead = Item.fromJson(BookOfTheDeadData);