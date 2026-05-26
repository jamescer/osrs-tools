import { Item } from "../Item";

const PickaxeHandleData = {
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
    id: 466,
    name: "Pickaxe handle"
  }
export const PickaxeHandle = Item.fromJson(PickaxeHandleData);
