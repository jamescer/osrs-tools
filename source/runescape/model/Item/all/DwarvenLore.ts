import { Item } from "../Item";

const DwarvenLoreData = {
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
    id: 4568,
    name: "Dwarven lore"
  }
export const DwarvenLore = Item.fromJson(DwarvenLoreData);
