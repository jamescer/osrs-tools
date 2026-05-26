import { Item } from "../Item";

const RatsPaperData = {
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
    id: 11008,
    name: "Rat's paper"
  }
export const RatsPaper = Item.fromJson(RatsPaperData);
