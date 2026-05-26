import { Item } from "../Item";

const ReceiptTheFeudData = {
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
    id: 4603,
    name: "Receipt (The Feud)"
  }
export const ReceiptTheFeud = Item.fromJson(ReceiptTheFeudData);
