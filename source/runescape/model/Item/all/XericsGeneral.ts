import { Item } from "../Item";

const XericsGeneralData = {
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
    id: 22394,
    name: "Xeric's general"
  }
export const XericsGeneral = Item.fromJson(XericsGeneralData);
