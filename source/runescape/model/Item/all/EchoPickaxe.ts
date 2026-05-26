import { Item } from "../Item";

const EchoPickaxeData = {
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
    id: 25112,
    name: "Echo pickaxe"
  }
export const EchoPickaxe = Item.fromJson(EchoPickaxeData);
