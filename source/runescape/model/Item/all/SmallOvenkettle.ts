import { Item } from "../Item";

const SmallOvenkettleData = {
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
    name: "Small oven#Kettle"
  }
export const SmallOvenkettle = Item.fromJson(SmallOvenkettleData);
