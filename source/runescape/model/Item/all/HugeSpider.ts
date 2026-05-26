import { Item } from "../Item";

const HugeSpiderData = {
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
    id: 8135,
    name: "Huge spider"
  }
export const HugeSpider = Item.fromJson(HugeSpiderData);
