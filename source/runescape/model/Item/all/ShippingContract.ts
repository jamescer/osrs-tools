import { Item } from "../Item";

const ShippingContractData = {{
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
    id: 29927,
    name: "Shipping contract"
  }
export const ShippingContract = Item.fromJson(ShippingContractData);