import { Item } from "../Item";

const KegDummyItemData = {
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
    id: 10885,
    name: "Keg (dummy item)"
  }
export const KegDummyItem = Item.fromJson(KegDummyItemData);
