import { Item } from "../Item";

const YellowBeadData = {
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
    id: 1472,
    name: "Yellow bead"
  }
export const YellowBead = Item.fromJson(YellowBeadData);
