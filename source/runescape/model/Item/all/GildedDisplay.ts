import { Item } from "../Item";

const GildedDisplayData = {
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
    id: 30653,
    name: "Gilded display"
  }
export const GildedDisplay = Item.fromJson(GildedDisplayData);
