import { Item } from "../Item";

const CrawlingHandItemData = {
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
    id: 7975,
    name: "Crawling hand (item)"
  }
export const CrawlingHandItem = Item.fromJson(CrawlingHandItemData);
