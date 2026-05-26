import { Item } from "../Item";

const BurntSpiderData = {
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
    id: 6301,
    name: "Burnt spider"
  }
export const BurntSpider = Item.fromJson(BurntSpiderData);
