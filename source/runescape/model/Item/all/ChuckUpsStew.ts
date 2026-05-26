import { Item } from "../Item";

const ChuckUpsStewData = {
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
    id: 31869,
    name: "Chuck up's 'stew'"
  }
export const ChuckUpsStew = Item.fromJson(ChuckUpsStewData);
