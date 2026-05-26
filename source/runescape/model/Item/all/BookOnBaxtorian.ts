import { Item } from "../Item";

const BookOnBaxtorianData = {
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
    id: 292,
    name: "Book on baxtorian"
  }
export const BookOnBaxtorian = Item.fromJson(BookOnBaxtorianData);
