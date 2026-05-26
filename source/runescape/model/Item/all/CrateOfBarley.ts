import { Item } from "../Item";

const CrateOfBarleyData = {
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
    id: 32548,
    name: "Crate of barley"
  }
export const CrateOfBarley = Item.fromJson(CrateOfBarleyData);
