import { Item } from "../Item";

const TheHueycoatlBookData = {
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
    id: 30123,
    name: "The hueycoatl (book)"
  }
export const TheHueycoatlBook = Item.fromJson(TheHueycoatlBookData);
