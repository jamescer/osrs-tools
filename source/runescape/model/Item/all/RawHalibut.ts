import { Item } from "../Item";

const RawHalibutData = {{
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
    id: 32333,
    name: "Raw halibut"
  }
export const RawHalibut = Item.fromJson(RawHalibutData);