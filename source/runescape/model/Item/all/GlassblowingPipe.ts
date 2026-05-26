import { Item } from "../Item";

const GlassblowingPipeData = {
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
    id: 1785,
    name: "Glassblowing pipe"
  }
export const GlassblowingPipe = Item.fromJson(GlassblowingPipeData);
