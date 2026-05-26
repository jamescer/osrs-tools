import { Item } from "../Item";

const LeafbladedSwordData = {
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
    id: 11902,
    name: "Leaf-bladed sword"
  }
export const LeafbladedSword = Item.fromJson(LeafbladedSwordData);
