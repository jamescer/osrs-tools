import { Item } from "../Item";

const PheasantEggData = {
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
    id: 28661,
    name: "Pheasant egg"
  }
export const PheasantEgg = Item.fromJson(PheasantEggData);
