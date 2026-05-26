import { Item } from "../Item";

const OsmumtensFangData = {
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
    id: 26219,
    name: "Osmumten's fang"
  }
export const OsmumtensFang = Item.fromJson(OsmumtensFangData);
