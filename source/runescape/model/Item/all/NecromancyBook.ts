import { Item } from "../Item";

const NecromancyBookData = {{
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
    id: 4837,
    name: "Necromancy book"
  }
export const NecromancyBook = Item.fromJson(NecromancyBookData);