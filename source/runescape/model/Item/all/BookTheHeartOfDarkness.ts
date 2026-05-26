import { Item } from "../Item";

const BookTheHeartOfDarknessData = {
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
    id: 29878,
    name: "Book (The Heart of Darkness)"
  }
export const BookTheHeartOfDarkness = Item.fromJson(BookTheHeartOfDarknessData);
