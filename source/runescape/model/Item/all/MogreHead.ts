import { Item } from "../Item";

const MogreHeadData = {
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
    id: 32846,
    name: "Mogre head"
  }
export const MogreHead = Item.fromJson(MogreHeadData);
