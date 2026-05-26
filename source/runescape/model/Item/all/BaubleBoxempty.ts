import { Item } from "../Item";

const BaubleBoxemptyData = {
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
    id: 6853,
    name: "Bauble box#Empty"
  }
export const BaubleBoxempty = Item.fromJson(BaubleBoxemptyData);
