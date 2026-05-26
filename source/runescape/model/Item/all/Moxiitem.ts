import { Item } from "../Item";

const MoxiitemData = {
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
    id: 30154,
    name: "Moxi#Item"
  }
export const Moxiitem = Item.fromJson(MoxiitemData);
