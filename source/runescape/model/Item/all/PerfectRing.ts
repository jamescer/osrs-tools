import { Item } from "../Item";

const PerfectRingData = {
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
    id: 773,
    name: "'perfect' ring"
  }
export const PerfectRing = Item.fromJson(PerfectRingData);
