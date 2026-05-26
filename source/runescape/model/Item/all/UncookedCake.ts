import { Item } from "../Item";

const UncookedCakeData = {
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
    id: 1889,
    name: "Uncooked cake"
  }
export const UncookedCake = Item.fromJson(UncookedCakeData);
