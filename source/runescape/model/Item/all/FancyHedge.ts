import { Item } from "../Item";

const FancyHedgeData = {
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
    id: 8207,
    name: "Fancy hedge"
  }
export const FancyHedge = Item.fromJson(FancyHedgeData);
