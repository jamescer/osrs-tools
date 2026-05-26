import { Item } from "../Item";

const SerafinaBookData = {
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
    id: 22047,
    name: "Serafina (book)"
  }
export const SerafinaBook = Item.fromJson(SerafinaBookData);
