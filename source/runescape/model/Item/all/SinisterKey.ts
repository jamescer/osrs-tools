import { Item } from "../Item";

const SinisterKeyData = {
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
    id: 993,
    name: "Sinister key"
  }
export const SinisterKey = Item.fromJson(SinisterKeyData);
