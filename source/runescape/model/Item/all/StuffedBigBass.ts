import { Item } from "../Item";

const StuffedBigBassData = {
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
    id: 7990,
    name: "Stuffed big bass"
  }
export const StuffedBigBass = Item.fromJson(StuffedBigBassData);
