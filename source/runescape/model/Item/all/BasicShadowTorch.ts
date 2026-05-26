import { Item } from "../Item";

const BasicShadowTorchData = {
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
    id: 28364,
    name: "Basic shadow torch"
  }
export const BasicShadowTorch = Item.fromJson(BasicShadowTorchData);
