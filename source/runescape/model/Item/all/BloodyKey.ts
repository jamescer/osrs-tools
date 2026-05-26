import { Item } from "../Item";

const BloodyKeyData = {
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
    id: 20526,
    name: "Bloody key"
  }
export const BloodyKey = Item.fromJson(BloodyKeyData);
