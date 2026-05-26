import { Item } from "../Item";

const ScytheHalloweenEventData = {
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
    id: 1419,
    name: "Scythe (Halloween event)"
  }
export const ScytheHalloweenEvent = Item.fromJson(ScytheHalloweenEventData);
