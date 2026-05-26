import { Item } from "../Item";

const TorchunlitData = {
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
    id: 596,
    name: "Torch#Unlit"
  }
export const Torchunlit = Item.fromJson(TorchunlitData);
