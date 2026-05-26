import { Item } from "../Item";

const MossyKeyData = {
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
    id: 22374,
    name: "Mossy key"
  }
export const MossyKey = Item.fromJson(MossyKeyData);
