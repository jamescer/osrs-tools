import { Item } from "../Item";

const CarrotJuiceGlassData = {
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
    id: 30708,
    name: "Carrot juice glass"
  }
export const CarrotJuiceGlass = Item.fromJson(CarrotJuiceGlassData);
