import { Item } from "../Item";

const SantasListData = {{
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
    id: 27564,
    name: "Santa's list"
  }
export const SantasList = Item.fromJson(SantasListData);