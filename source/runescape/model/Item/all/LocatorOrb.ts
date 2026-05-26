import { Item } from "../Item";

const LocatorOrbData = {
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
    id: 22081,
    name: "Locator orb"
  }
export const LocatorOrb = Item.fromJson(LocatorOrbData);
