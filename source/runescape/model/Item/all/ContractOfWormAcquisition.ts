import { Item } from "../Item";

const ContractOfWormAcquisitionData = {
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
    id: 30834,
    name: "Contract of worm acquisition"
  }
export const ContractOfWormAcquisition = Item.fromJson(ContractOfWormAcquisitionData);
