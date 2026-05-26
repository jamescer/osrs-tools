import { Item } from "../Item";

const RawLarupiaData = {
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
    id: 29122,
    name: "Raw larupia"
  }
export const RawLarupia = Item.fromJson(RawLarupiaData);
