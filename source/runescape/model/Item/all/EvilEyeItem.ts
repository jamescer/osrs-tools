import { Item } from "../Item";

const EvilEyeItemData = {
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
    id: 33227,
    name: "Evil eye (item)"
  }
export const EvilEyeItem = Item.fromJson(EvilEyeItemData);
