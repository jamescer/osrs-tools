import { Item } from "../Item";

const BoneMaceData = {
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
    id: 28792,
    name: "Bone mace"
  }
export const BoneMace = Item.fromJson(BoneMaceData);
