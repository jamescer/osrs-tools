import { Item } from "../Item";

const MagusRingData = {
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
    id: 28313,
    name: "Magus ring"
  }
export const MagusRing = Item.fromJson(MagusRingData);
