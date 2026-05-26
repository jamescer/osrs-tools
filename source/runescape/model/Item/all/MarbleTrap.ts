import { Item } from "../Item";

const MarbleTrapData = {
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
    id: 8146,
    name: "Marble trap"
  }
export const MarbleTrap = Item.fromJson(MarbleTrapData);
