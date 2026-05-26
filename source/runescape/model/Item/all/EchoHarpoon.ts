import { Item } from "../Item";

const EchoHarpoonData = {
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
    id: 25114,
    name: "Echo harpoon"
  }
export const EchoHarpoon = Item.fromJson(EchoHarpoonData);
