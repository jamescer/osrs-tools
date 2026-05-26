import { Item } from "../Item";

const MuddyKeyData = {
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
    id: 991,
    name: "Muddy key"
  }
export const MuddyKey = Item.fromJson(MuddyKeyData);
