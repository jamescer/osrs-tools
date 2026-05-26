import { Item } from "../Item";

const SpottedCapeinventoryData = {
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
    id: 10069,
    name: "Spotted cape#Inventory"
  }
export const SpottedCapeinventory = Item.fromJson(SpottedCapeinventoryData);
