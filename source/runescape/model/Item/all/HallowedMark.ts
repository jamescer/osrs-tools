import { Item } from "../Item";

const HallowedMarkData = {
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
    id: 24711,
    name: "Hallowed mark"
  }
export const HallowedMark = Item.fromJson(HallowedMarkData);
