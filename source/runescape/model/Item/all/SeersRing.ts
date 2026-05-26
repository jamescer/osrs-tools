import { Item } from "../Item";

const SeersRingData = {
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
    id: 6731,
    name: "Seers ring"
  }
export const SeersRing = Item.fromJson(SeersRingData);
