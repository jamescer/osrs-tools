import { Item } from "../Item";

const UnholyBookData = {
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
    id: 3842,
    name: "Unholy book"
  }
export const UnholyBook = Item.fromJson(UnholyBookData);
