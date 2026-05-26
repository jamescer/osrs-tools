import { Item } from "../Item";

const OmegaEggData = {
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
    id: 10537,
    name: "Omega egg"
  }
export const OmegaEgg = Item.fromJson(OmegaEggData);
