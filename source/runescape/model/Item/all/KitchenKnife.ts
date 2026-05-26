import { Item } from "../Item";

const KitchenKnifeData = {
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
    id: 7447,
    name: "Kitchen knife"
  }
export const KitchenKnife = Item.fromJson(KitchenKnifeData);
