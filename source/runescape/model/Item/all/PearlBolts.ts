import { Item } from "../Item";

const PearlBoltsData = {
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
    id: 880,
    name: "Pearl bolts"
  }
export const PearlBolts = Item.fromJson(PearlBoltsData);
