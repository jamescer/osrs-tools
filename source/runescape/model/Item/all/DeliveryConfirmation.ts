import { Item } from "../Item";

const DeliveryConfirmationData = {{
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
    id: 25796,
    name: "Delivery confirmation"
  }
export const DeliveryConfirmation = Item.fromJson(DeliveryConfirmationData);