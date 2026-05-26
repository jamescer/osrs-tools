import { Item } from "../Item";

const SilifItemData = {
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
    id: 29572,
    name: "Silif (item)"
  }
export const SilifItem = Item.fromJson(SilifItemData);
