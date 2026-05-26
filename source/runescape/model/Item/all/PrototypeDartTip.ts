import { Item } from "../Item";

const PrototypeDartTipData = {
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
    id: 1853,
    name: "Prototype dart tip"
  }
export const PrototypeDartTip = Item.fromJson(PrototypeDartTipData);
