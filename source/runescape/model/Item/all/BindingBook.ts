import { Item } from "../Item";

const BindingBookData = {
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
    id: 730,
    name: "Binding book"
  }
export const BindingBook = Item.fromJson(BindingBookData);
