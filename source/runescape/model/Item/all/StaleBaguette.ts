import { Item } from "../Item";

const StaleBaguetteData = {
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
    id: 20590,
    name: "Stale baguette"
  }
export const StaleBaguette = Item.fromJson(StaleBaguetteData);
