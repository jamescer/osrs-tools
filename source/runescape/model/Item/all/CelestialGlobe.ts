import { Item } from "../Item";

const CelestialGlobeData = {
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
    id: 8344,
    name: "Celestial globe"
  }
export const CelestialGlobe = Item.fromJson(CelestialGlobeData);
