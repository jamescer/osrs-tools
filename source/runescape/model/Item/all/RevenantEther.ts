import { Item } from "../Item";

const RevenantEtherData = {
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
    id: 21820,
    name: "Revenant ether"
  }
export const RevenantEther = Item.fromJson(RevenantEtherData);
