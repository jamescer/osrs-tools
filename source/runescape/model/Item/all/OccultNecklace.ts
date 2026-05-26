import { Item } from "../Item";

const OccultNecklaceData = {
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
    id: 12002,
    name: "Occult necklace"
  }
export const OccultNecklace = Item.fromJson(OccultNecklaceData);
