import { Item } from "../Item";

const FineFishOffcutsData = {
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
    id: 32307,
    name: "Fine fish offcuts"
  }
export const FineFishOffcuts = Item.fromJson(FineFishOffcutsData);
