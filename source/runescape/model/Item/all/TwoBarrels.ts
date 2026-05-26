import { Item } from "../Item";

const TwoBarrelsData = {
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
    id: 8861,
    name: "Two barrels"
  }
export const TwoBarrels = Item.fromJson(TwoBarrelsData);
