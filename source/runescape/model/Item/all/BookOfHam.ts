import { Item } from "../Item";

const BookOfHamData = {{
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
    id: 4829,
    name: "Book of 'h.a.m'"
  }
export const BookOfHam = Item.fromJson(BookOfHamData);