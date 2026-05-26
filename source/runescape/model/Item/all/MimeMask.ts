import { Item } from "../Item";

const MimeMaskData = {
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
    id: 3057,
    name: "Mime mask"
  }
export const MimeMask = Item.fromJson(MimeMaskData);
