import { Item } from "../Item";

const RuinedBackpackData = {
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
    id: 4810,
    name: "Ruined backpack"
  }
export const RuinedBackpack = Item.fromJson(RuinedBackpackData);
