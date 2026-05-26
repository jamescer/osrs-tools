import { Item } from "../Item";

const WhiteLilyData = {
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
    id: 22932,
    name: "White lily"
  }
export const WhiteLily = Item.fromJson(WhiteLilyData);
