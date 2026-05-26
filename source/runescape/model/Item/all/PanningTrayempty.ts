import { Item } from "../Item";

const PanningTrayemptyData = {
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
    id: 677,
    name: "Panning tray#Empty"
  }
export const PanningTrayempty = Item.fromJson(PanningTrayemptyData);
