import { Item } from "../Item";

const BrokenGlassData = {
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
    id: 1469,
    name: "Broken glass"
  }
export const BrokenGlass = Item.fromJson(BrokenGlassData);
