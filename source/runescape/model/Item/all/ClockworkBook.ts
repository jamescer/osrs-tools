import { Item } from "../Item";

const ClockworkBookData = {{
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
    id: 10594,
    name: "Clockwork book"
  }
export const ClockworkBook = Item.fromJson(ClockworkBookData);