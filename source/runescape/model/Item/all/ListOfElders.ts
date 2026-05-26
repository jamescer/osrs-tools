import { Item } from "../Item";

const ListOfEldersData = {
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
    id: 28808,
    name: "List of elders"
  }
export const ListOfElders = Item.fromJson(ListOfEldersData);
