import { Item } from "../Item";

const DamagedMonkeyTailData = {
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
    id: 19665,
    name: "Damaged monkey tail"
  }
export const DamagedMonkeyTail = Item.fromJson(DamagedMonkeyTailData);
