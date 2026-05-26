import { Item } from "../Item";

const SnowyKnightItemData = {
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
    id: 10016,
    name: "Snowy knight (item)"
  }
export const SnowyKnightItem = Item.fromJson(SnowyKnightItemData);
