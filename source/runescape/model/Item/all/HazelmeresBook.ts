import { Item } from "../Item";

const HazelmeresBookData = {{
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
    id: 9595,
    name: "Hazelmere's book"
  }
export const HazelmeresBook = Item.fromJson(HazelmeresBookData);