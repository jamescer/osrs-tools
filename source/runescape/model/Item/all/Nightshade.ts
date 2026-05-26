import { Item } from "../Item";

const NightshadeData = {
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
    id: 27790,
    name: "Nightshade"
  }
export const Nightshade = Item.fromJson(NightshadeData);
