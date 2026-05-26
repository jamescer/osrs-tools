import { Item } from "../Item";

const BurntPageData = {
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
    id: 20718,
    name: "Burnt page"
  }
export const BurntPage = Item.fromJson(BurntPageData);
