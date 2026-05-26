import { Item } from "../Item";

const RawAnglerfishData = {
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
    id: 13439,
    name: "Raw anglerfish"
  }
export const RawAnglerfish = Item.fromJson(RawAnglerfishData);
