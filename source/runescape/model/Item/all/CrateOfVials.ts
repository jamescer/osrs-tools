import { Item } from "../Item";

const CrateOfVialsData = {
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
    id: 32499,
    name: "Crate of vials"
  }
export const CrateOfVials = Item.fromJson(CrateOfVialsData);
