import { Item } from "../Item";

const HettysEmptyCauldronData = {
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
    id: 22679,
    name: "Hetty's empty cauldron"
  }
export const HettysEmptyCauldron = Item.fromJson(HettysEmptyCauldronData);
