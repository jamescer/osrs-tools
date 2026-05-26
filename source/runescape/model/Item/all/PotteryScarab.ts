import { Item } from "../Item";

const PotteryScarabData = {
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
    id: 9032,
    name: "Pottery scarab"
  }
export const PotteryScarab = Item.fromJson(PotteryScarabData);
