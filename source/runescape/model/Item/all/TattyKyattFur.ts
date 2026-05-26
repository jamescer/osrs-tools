import { Item } from "../Item";

const TattyKyattFurData = {
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
    id: 10101,
    name: "Tatty kyatt fur"
  }
export const TattyKyattFur = Item.fromJson(TattyKyattFurData);
