import { Item } from "../Item";

const StaleBreadData = {
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
    id: 25288,
    name: "Stale bread"
  }
export const StaleBread = Item.fromJson(StaleBreadData);
