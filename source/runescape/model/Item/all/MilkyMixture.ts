import { Item } from "../Item";

const MilkyMixtureData = {
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
    id: 7471,
    name: "Milky mixture"
  }
export const MilkyMixture = Item.fromJson(MilkyMixtureData);
