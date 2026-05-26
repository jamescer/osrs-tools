import { Item } from "../Item";

const BlessedPotemptyData = {
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
    id: 4659,
    name: "Blessed pot#Empty"
  }
export const BlessedPotempty = Item.fromJson(BlessedPotemptyData);
