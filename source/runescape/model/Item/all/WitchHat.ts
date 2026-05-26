import { Item } from "../Item";

const WitchHatData = {
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
    id: 27473,
    name: "Witch hat"
  }
export const WitchHat = Item.fromJson(WitchHatData);
