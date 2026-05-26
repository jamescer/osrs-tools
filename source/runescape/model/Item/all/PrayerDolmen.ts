import { Item } from "../Item";

const PrayerDolmenData = {
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
    id: 29547,
    name: "Prayer dolmen"
  }
export const PrayerDolmen = Item.fromJson(PrayerDolmenData);
