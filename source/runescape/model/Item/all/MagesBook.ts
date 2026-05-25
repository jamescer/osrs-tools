import { Item } from "../Item";

const MagesBookData = {{
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
    id: 6889,
    name: "Mage's book"
  }
export const MagesBook = Item.fromJson(MagesBookData);