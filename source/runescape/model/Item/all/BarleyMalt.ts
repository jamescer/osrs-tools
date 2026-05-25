import { Item } from "../Item";

const BarleyMaltData = {{
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
    id: 6008,
    name: "Barley malt"
  }
export const BarleyMalt = Item.fromJson(BarleyMaltData);