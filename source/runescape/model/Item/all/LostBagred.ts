import { Item } from "../Item";

const LostBagredData = {
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
    id: 26984,
    name: "Lost bag#Red"
  }
export const LostBagred = Item.fromJson(LostBagredData);
