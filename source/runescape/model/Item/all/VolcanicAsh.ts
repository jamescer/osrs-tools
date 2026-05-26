import { Item } from "../Item";

const VolcanicAshData = {
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
    id: 21622,
    name: "Volcanic ash"
  }
export const VolcanicAsh = Item.fromJson(VolcanicAshData);
