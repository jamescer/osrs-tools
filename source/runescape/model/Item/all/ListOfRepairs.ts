import { Item } from "../Item";

const ListOfRepairsData = {{
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
    id: 31397,
    name: "List of repairs"
  }
export const ListOfRepairs = Item.fromJson(ListOfRepairsData);