import { Item } from "../Item";

const EmptyCandleLanternData = {{
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
    id: 4527,
    name: "Empty candle lantern"
  }
export const EmptyCandleLantern = Item.fromJson(EmptyCandleLanternData);