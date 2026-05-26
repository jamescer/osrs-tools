import { Item } from "../Item";

const WineLabelsData = {
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
    id: 29928,
    name: "Wine labels"
  }
export const WineLabels = Item.fromJson(WineLabelsData);
