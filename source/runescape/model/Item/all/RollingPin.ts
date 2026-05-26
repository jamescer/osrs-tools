import { Item } from "../Item";

const RollingPinData = {
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
    id: 7445,
    name: "Rolling pin"
  }
export const RollingPin = Item.fromJson(RollingPinData);
