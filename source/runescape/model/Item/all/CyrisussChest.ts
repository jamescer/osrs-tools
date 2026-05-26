import { Item } from "../Item";

const CyrisussChestData = {
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
    id: 11158,
    name: "Cyrisus's chest"
  }
export const CyrisussChest = Item.fromJson(CyrisussChestData);
