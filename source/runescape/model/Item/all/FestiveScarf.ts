import { Item } from "../Item";

const FestiveScarfData = {
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
    id: 30489,
    name: "Festive scarf"
  }
export const FestiveScarf = Item.fromJson(FestiveScarfData);
