import { Item } from "../Item";

const SpecialHotSauceData = {
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
    id: 26916,
    name: "Special hot sauce"
  }
export const SpecialHotSauce = Item.fromJson(SpecialHotSauceData);
