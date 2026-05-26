import { Item } from "../Item";

const MulledPineData = {
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
    id: 27562,
    name: "Mulled pine"
  }
export const MulledPine = Item.fromJson(MulledPineData);
