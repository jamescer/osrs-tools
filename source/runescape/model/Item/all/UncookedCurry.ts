import { Item } from "../Item";

const UncookedCurryData = {
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
    id: 2009,
    name: "Uncooked curry"
  }
export const UncookedCurry = Item.fromJson(UncookedCurryData);
