import { Item } from "../Item";

const ThinSnailData = {
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
    id: 3363,
    name: "Thin snail"
  }
export const ThinSnail = Item.fromJson(ThinSnailData);
