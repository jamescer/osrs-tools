import { Item } from "../Item";

const DeadmanRugData = {
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
    id: 29598,
    name: "Deadman rug"
  }
export const DeadmanRug = Item.fromJson(DeadmanRugData);
