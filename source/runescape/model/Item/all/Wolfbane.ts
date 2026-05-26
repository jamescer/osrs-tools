import { Item } from "../Item";

const WolfbaneData = {
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
    id: 2952,
    name: "Wolfbane"
  }
export const Wolfbane = Item.fromJson(WolfbaneData);
