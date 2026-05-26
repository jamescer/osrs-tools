import { Item } from "../Item";

const BlankAirRuneData = {
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
    id: 9692,
    name: "Blank air rune"
  }
export const BlankAirRune = Item.fromJson(BlankAirRuneData);
