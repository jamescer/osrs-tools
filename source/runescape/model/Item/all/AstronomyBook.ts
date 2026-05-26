import { Item } from "../Item";

const AstronomyBookData = {
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
    id: 600,
    name: "Astronomy book"
  }
export const AstronomyBook = Item.fromJson(AstronomyBookData);
