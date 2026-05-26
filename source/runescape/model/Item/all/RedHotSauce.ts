import { Item } from "../Item";

const RedHotSauceData = {
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
    id: 4610,
    name: "Red hot sauce"
  }
export const RedHotSauce = Item.fromJson(RedHotSauceData);
