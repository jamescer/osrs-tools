import { Item } from "../Item";

const VenatorIconData = {
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
    id: 28289,
    name: "Venator icon"
  }
export const VenatorIcon = Item.fromJson(VenatorIconData);
