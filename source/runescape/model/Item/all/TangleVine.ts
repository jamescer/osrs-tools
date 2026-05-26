import { Item } from "../Item";

const TangleVineData = {
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
    id: 8145,
    name: "Tangle vine"
  }
export const TangleVine = Item.fromJson(TangleVineData);
