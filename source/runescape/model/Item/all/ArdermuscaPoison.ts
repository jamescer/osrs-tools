import { Item } from "../Item";

const ArdermuscaPoisonData = {
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
    id: 28351,
    name: "Arder-musca poison"
  }
export const ArdermuscaPoison = Item.fromJson(ArdermuscaPoisonData);
