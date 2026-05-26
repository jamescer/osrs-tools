import { Item } from "../Item";

const SlateTabletData = {
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
    id: 28818,
    name: "Slate tablet"
  }
export const SlateTablet = Item.fromJson(SlateTabletData);
