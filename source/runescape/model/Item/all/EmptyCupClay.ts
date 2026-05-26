import { Item } from "../Item";

const EmptyCupClayData = {
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
    id: 7728,
    name: "Empty cup (clay)"
  }
export const EmptyCupClay = Item.fromJson(EmptyCupClayData);
