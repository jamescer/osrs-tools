import { Item } from "../Item";

const BloodbarkBodyData = {
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
    id: 25404,
    name: "Bloodbark body"
  }
export const BloodbarkBody = Item.fromJson(BloodbarkBodyData);
