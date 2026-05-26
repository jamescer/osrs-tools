import { Item } from "../Item";

const BruleeRawData = {
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
    id: 7475,
    name: "Brulee (raw)"
  }
export const BruleeRaw = Item.fromJson(BruleeRawData);
