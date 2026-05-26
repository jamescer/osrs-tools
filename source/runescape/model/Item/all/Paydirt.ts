import { Item } from "../Item";

const PaydirtData = {
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
    id: 12011,
    name: "Pay-dirt"
  }
export const Paydirt = Item.fromJson(PaydirtData);
