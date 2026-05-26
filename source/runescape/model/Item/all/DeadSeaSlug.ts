import { Item } from "../Item";

const DeadSeaSlugData = {
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
    id: 9683,
    name: "Dead sea slug"
  }
export const DeadSeaSlug = Item.fromJson(DeadSeaSlugData);
