import { Item } from "../Item";

const RodDustData = {
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
    id: 7636,
    name: "Rod dust"
  }
export const RodDust = Item.fromJson(RodDustData);
