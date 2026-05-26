import { Item } from "../Item";

const CrateOfHuascaData = {
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
    id: 32622,
    name: "Crate of huasca"
  }
export const CrateOfHuasca = Item.fromJson(CrateOfHuascaData);
