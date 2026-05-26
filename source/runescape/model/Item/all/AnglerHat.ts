import { Item } from "../Item";

const AnglerHatData = {
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
    id: 13258,
    name: "Angler hat"
  }
export const AnglerHat = Item.fromJson(AnglerHatData);
