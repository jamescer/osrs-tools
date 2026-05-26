import { Item } from "../Item";

const ClayFireplaceData = {
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
    id: 8325,
    name: "Clay fireplace"
  }
export const ClayFireplace = Item.fromJson(ClayFireplaceData);
