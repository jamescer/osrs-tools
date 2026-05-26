import { Item } from "../Item";

const MoltenGlassData = {
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
    id: 1775,
    name: "Molten glass"
  }
export const MoltenGlass = Item.fromJson(MoltenGlassData);
