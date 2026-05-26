import { Item } from "../Item";

const BookShieldOfArravData = {
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
    id: 757,
    name: "Book (Shield of Arrav)"
  }
export const BookShieldOfArrav = Item.fromJson(BookShieldOfArravData);
