import { Item } from "../Item";

const RupertsHelmetData = {
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
    id: 11199,
    name: "Rupert's helmet"
  }
export const RupertsHelmet = Item.fromJson(RupertsHelmetData);
