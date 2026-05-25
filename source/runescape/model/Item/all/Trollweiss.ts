import { Item } from "../Item";

const TrollweissData = {{
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
    id: 4086,
    name: "Trollweiss"
  }
export const Trollweiss = Item.fromJson(TrollweissData);