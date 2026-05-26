import { Item } from "../Item";

const StinkBombData = {
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
    id: 28471,
    name: "Stink bomb"
  }
export const StinkBomb = Item.fromJson(StinkBombData);
