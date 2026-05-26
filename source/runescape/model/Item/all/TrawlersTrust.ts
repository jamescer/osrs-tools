import { Item } from "../Item";

const TrawlersTrustData = {
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
    id: 31820,
    name: "Trawler's trust"
  }
export const TrawlersTrust = Item.fromJson(TrawlersTrustData);
