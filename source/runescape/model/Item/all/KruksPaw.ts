import { Item } from "../Item";

const KruksPawData = {
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
    id: 19523,
    name: "Kruk's paw"
  }
export const KruksPaw = Item.fromJson(KruksPawData);
