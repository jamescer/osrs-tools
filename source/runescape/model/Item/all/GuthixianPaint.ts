import { Item } from "../Item";

const GuthixianPaintData = {
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
    id: 32106,
    name: "Guthixian paint"
  }
export const GuthixianPaint = Item.fromJson(GuthixianPaintData);
