import { Item } from "../Item";

const CollectionLogDragonData = {
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
    id: 30593,
    name: "Collection log (dragon)"
  }
export const CollectionLogDragon = Item.fromJson(CollectionLogDragonData);
