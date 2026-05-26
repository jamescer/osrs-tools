import { Item } from "../Item";

const WoollyHatData = {
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
    id: 6862,
    name: "Woolly hat"
  }
export const WoollyHat = Item.fromJson(WoollyHatData);
