import { Item } from "../Item";

const BookOfLawData = {{
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
    id: 12610,
    name: "Book of law"
  }
export const BookOfLaw = Item.fromJson(BookOfLawData);