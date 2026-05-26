import { Item } from "../Item";

const PrayerHoodData = {
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
    id: 9761,
    name: "Prayer hood"
  }
export const PrayerHood = Item.fromJson(PrayerHoodData);
