import { Item } from "../Item";

const GoldenNuggetData = {{
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
    id: 12012,
    name: "Golden nugget"
  }
export const GoldenNugget = Item.fromJson(GoldenNuggetData);