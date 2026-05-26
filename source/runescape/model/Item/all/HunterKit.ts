import { Item } from "../Item";

const HunterKitData = {
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
    id: 11159,
    name: "Hunter kit"
  }
export const HunterKit = Item.fromJson(HunterKitData);
