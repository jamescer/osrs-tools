import { Item } from "../Item";

const FusebrokenData = {
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
    id: 10986,
    name: "Fuse#Broken"
  }
export const Fusebroken = Item.fromJson(FusebrokenData);
