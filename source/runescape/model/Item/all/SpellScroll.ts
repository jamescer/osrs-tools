import { Item } from "../Item";

const SpellScrollData = {
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
    id: 2396,
    name: "Spell scroll"
  }
export const SpellScroll = Item.fromJson(SpellScrollData);
