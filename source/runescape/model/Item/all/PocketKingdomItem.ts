import { Item } from "../Item";

const PocketKingdomItemData = {
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
    id: 30365,
    name: "Pocket kingdom (item)"
  }
export const PocketKingdomItem = Item.fromJson(PocketKingdomItemData);
