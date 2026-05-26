import { Item } from "../Item";

const WoodenCabinetData = {
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
    id: 24898,
    name: "Wooden cabinet"
  }
export const WoodenCabinet = Item.fromJson(WoodenCabinetData);
