import { Item } from "../Item";

const ClueContractData = {{
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
    id: 33235,
    name: "Clue contract"
  }
export const ClueContract = Item.fromJson(ClueContractData);