import { Item } from "../Item";

const ShippingOrderData = {{
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
    id: 10897,
    name: "Shipping order"
  }
export const ShippingOrder = Item.fromJson(ShippingOrderData);