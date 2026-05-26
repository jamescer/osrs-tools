import { Item } from "../Item";

const ContractOfFamiliarAcquisitionData = {
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
    id: 30840,
    name: "Contract of familiar acquisition"
  }
export const ContractOfFamiliarAcquisition = Item.fromJson(ContractOfFamiliarAcquisitionData);
