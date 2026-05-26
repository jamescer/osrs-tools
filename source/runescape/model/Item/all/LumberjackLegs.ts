import { Item } from "../Item";

const LumberjackLegsData = {
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
    id: 10940,
    name: "Lumberjack legs"
  }
export const LumberjackLegs = Item.fromJson(LumberjackLegsData);
