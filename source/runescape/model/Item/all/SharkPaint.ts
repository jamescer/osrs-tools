import { Item } from "../Item";

const SharkPaintData = {
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
    id: 32090,
    name: "Shark paint"
  }
export const SharkPaint = Item.fromJson(SharkPaintData);
