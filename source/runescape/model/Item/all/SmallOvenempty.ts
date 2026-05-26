import { Item } from "../Item";

const SmallOvenemptyData = {
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
    id: 8219,
    name: "Small oven#Empty"
  }
export const SmallOvenempty = Item.fromJson(SmallOvenemptyData);
