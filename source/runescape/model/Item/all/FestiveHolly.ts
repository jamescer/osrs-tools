import { Item } from "../Item";

const FestiveHollyData = {
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
    id: 26272,
    name: "Festive holly"
  }
export const FestiveHolly = Item.fromJson(FestiveHollyData);
