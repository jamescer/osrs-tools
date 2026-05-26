import { Item } from "../Item";

const LumberjackTopData = {
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
    id: 10939,
    name: "Lumberjack top"
  }
export const LumberjackTop = Item.fromJson(LumberjackTopData);
