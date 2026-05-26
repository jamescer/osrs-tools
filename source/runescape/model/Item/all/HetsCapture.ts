import { Item } from "../Item";

const HetsCaptureData = {
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
    id: 27302,
    name: "Het's capture"
  }
export const HetsCapture = Item.fromJson(HetsCaptureData);
