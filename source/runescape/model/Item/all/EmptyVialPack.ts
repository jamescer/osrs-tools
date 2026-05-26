import { Item } from "../Item";

const EmptyVialPackData = {
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
    id: 11877,
    name: "Empty vial pack"
  }
export const EmptyVialPack = Item.fromJson(EmptyVialPackData);
