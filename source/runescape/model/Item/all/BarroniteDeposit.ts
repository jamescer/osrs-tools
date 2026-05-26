import { Item } from "../Item";

const BarroniteDepositData = {
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
    id: 25684,
    name: "Barronite deposit"
  }
export const BarroniteDeposit = Item.fromJson(BarroniteDepositData);
