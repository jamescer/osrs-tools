import { Item } from "../Item";

const FangOfTheHoundData = {
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
    id: 33249,
    name: "Fang of the hound"
  }
export const FangOfTheHound = Item.fromJson(FangOfTheHoundData);
