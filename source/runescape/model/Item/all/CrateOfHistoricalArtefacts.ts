import { Item } from "../Item";

const CrateOfHistoricalArtefactsData = {
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
    id: 32506,
    name: "Crate of historical artefacts"
  }
export const CrateOfHistoricalArtefacts = Item.fromJson(CrateOfHistoricalArtefactsData);
