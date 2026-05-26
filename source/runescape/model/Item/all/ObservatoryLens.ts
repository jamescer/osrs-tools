import { Item } from "../Item";

const ObservatoryLensData = {
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
    id: 603,
    name: "Observatory lens"
  }
export const ObservatoryLens = Item.fromJson(ObservatoryLensData);
