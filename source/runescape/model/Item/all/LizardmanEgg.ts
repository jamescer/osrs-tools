import { Item } from "../Item";

const LizardmanEggData = {
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
    id: 25809,
    name: "Lizardman egg"
  }
export const LizardmanEgg = Item.fromJson(LizardmanEggData);
