import { Item } from "../Item";

const AnnihilationBlueprintsData = {
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
    id: 33015,
    name: "Annihilation blueprints"
  }
export const AnnihilationBlueprints = Item.fromJson(AnnihilationBlueprintsData);
