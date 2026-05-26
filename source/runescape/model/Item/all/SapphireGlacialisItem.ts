import { Item } from "../Item";

const SapphireGlacialisItemData = {
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
    id: 10018,
    name: "Sapphire glacialis (item)"
  }
export const SapphireGlacialisItem = Item.fromJson(SapphireGlacialisItemData);
