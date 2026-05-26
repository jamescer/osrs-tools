import { Item } from "../Item";

const SandyPaintData = {
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
    id: 32113,
    name: "Sandy paint"
  }
export const SandyPaint = Item.fromJson(SandyPaintData);
