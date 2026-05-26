import { Item } from "../Item";

const BullseyeLanternEmptyData = {
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
    id: 4546,
    name: "Bullseye lantern (empty)"
  }
export const BullseyeLanternEmpty = Item.fromJson(BullseyeLanternEmptyData);
