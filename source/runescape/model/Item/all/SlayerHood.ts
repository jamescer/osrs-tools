import { Item } from "../Item";

const SlayerHoodData = {
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
    id: 9788,
    name: "Slayer hood"
  }
export const SlayerHood = Item.fromJson(SlayerHoodData);
