import { Item } from "../Item";

const WarriorsContractData = {
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
    id: 3710,
    name: "Warriors' contract"
  }
export const WarriorsContract = Item.fromJson(WarriorsContractData);
