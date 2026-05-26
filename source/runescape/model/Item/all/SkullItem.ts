import { Item } from "../Item";

const SkullItemData = {
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
    id: 964,
    name: "Skull (item)"
  }
export const SkullItem = Item.fromJson(SkullItemData);
