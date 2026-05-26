import { Item } from "../Item";

const BatteredBookData = {
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
    id: 2886,
    name: "Battered book"
  }
export const BatteredBook = Item.fromJson(BatteredBookData);
