import { Item } from "../Item";

const TrollThistleData = {
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
    id: 3262,
    name: "Troll thistle"
  }
export const TrollThistle = Item.fromJson(TrollThistleData);
