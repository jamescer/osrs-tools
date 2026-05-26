import { Item } from "../Item";

const GhraziRapierData = {
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
    id: 22324,
    name: "Ghrazi rapier"
  }
export const GhraziRapier = Item.fromJson(GhraziRapierData);
