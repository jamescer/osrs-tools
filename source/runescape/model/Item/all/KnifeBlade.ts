import { Item } from "../Item";

const KnifeBladeData = {{
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
    id: 30965,
    name: "Knife blade"
  }
export const KnifeBlade = Item.fromJson(KnifeBladeData);