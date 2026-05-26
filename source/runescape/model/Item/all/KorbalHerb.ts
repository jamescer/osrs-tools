import { Item } from "../Item";

const KorbalHerbData = {
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
    id: 28384,
    name: "Korbal herb"
  }
export const KorbalHerb = Item.fromJson(KorbalHerbData);
