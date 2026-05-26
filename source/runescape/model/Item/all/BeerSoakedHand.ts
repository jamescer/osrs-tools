import { Item } from "../Item";

const BeerSoakedHandData = {
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
    id: 6946,
    name: "Beer soaked hand"
  }
export const BeerSoakedHand = Item.fromJson(BeerSoakedHandData);
