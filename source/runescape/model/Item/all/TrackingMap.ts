import { Item } from "../Item";

const TrackingMapData = {
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
    id: 3701,
    name: "Tracking map"
  }
export const TrackingMap = Item.fromJson(TrackingMapData);
