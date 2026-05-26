import { Item } from "../Item";

const GreggsIouData = {
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
    id: 25608,
    name: "Gregg's iou"
  }
export const GreggsIou = Item.fromJson(GreggsIouData);
