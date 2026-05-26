import { Item } from "../Item";

const GemPouchopenData = {
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
    id: 33386,
    name: "Gem pouch#Open"
  }
export const GemPouchopen = Item.fromJson(GemPouchopenData);
