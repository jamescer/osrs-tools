import { Item } from "../Item";

const FlashPowderData = {
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
    id: 5559,
    name: "Flash powder"
  }
export const FlashPowder = Item.fromJson(FlashPowderData);
