import { Item } from "../Item";

const TeleportFocusFacilityData = {
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
    id: 32237,
    name: "Teleport focus (facility)"
  }
export const TeleportFocusFacility = Item.fromJson(TeleportFocusFacilityData);
