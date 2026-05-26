import { Item } from "../Item";

const RawSwampPasteData = {
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
    id: 1940,
    name: "Raw swamp paste"
  }
export const RawSwampPaste = Item.fromJson(RawSwampPasteData);
