import { Item } from "../Item";

const IronOxideData = {
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
    id: 4427,
    name: "Iron oxide"
  }
export const IronOxide = Item.fromJson(IronOxideData);
