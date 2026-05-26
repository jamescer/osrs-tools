import { Item } from "../Item";

const NewcomerMapData = {
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
    id: 550,
    name: "Newcomer map"
  }
export const NewcomerMap = Item.fromJson(NewcomerMapData);
