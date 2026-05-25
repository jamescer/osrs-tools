import { Item } from "../Item";

const GildedTotemData = {{
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
    id: 750,
    name: "Gilded totem"
  }
export const GildedTotem = Item.fromJson(GildedTotemData);