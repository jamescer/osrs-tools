import { Item } from "../Item";

const BarracudaPaintData = {
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
    id: 32087,
    name: "Barracuda paint"
  }
export const BarracudaPaint = Item.fromJson(BarracudaPaintData);
