import { Item } from "../Item";

const StoreroomKeyData = {
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
    id: 3269,
    name: "Storeroom key"
  }
export const StoreroomKey = Item.fromJson(StoreroomKeyData);
