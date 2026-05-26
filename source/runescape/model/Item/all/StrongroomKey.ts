import { Item } from "../Item";

const StrongroomKeyData = {
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
    id: 28574,
    name: "Strongroom key"
  }
export const StrongroomKey = Item.fromJson(StrongroomKeyData);
