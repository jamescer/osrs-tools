import { Item } from "../Item";

const MahoganyWardrobeData = {
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
    id: 8043,
    name: "Mahogany wardrobe"
  }
export const MahoganyWardrobe = Item.fromJson(MahoganyWardrobeData);
