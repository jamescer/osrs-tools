import { Item } from "../Item";

const ArcticPineLogsData = {
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
    id: 10810,
    name: "Arctic pine logs"
  }
export const ArcticPineLogs = Item.fromJson(ArcticPineLogsData);
