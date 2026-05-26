import { Item } from "../Item";

const ScrollBoxMasterData = {
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
    id: 24366,
    name: "Scroll box (master)"
  }
export const ScrollBoxMaster = Item.fromJson(ScrollBoxMasterData);
