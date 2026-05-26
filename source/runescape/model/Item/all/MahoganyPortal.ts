import { Item } from "../Item";

const MahoganyPortalData = {
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
    id: 8329,
    name: "Mahogany portal"
  }
export const MahoganyPortal = Item.fromJson(MahoganyPortalData);
