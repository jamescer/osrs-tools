import { Item } from "../Item";

const EmissaryHoodData = {
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
    id: 29868,
    name: "Emissary hood"
  }
export const EmissaryHood = Item.fromJson(EmissaryHoodData);
