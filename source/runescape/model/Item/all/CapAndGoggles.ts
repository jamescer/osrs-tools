import { Item } from "../Item";

const CapAndGogglesData = {
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
    id: 9946,
    name: "Cap and goggles"
  }
export const CapAndGoggles = Item.fromJson(CapAndGogglesData);
