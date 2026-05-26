import { Item } from "../Item";

const FrogMaskData = {
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
    id: 6188,
    name: "Frog mask"
  }
export const FrogMask = Item.fromJson(FrogMaskData);
