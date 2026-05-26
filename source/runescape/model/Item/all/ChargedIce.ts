import { Item } from "../Item";

const ChargedIceData = {
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
    id: 27643,
    name: "Charged ice"
  }
export const ChargedIce = Item.fromJson(ChargedIceData);
