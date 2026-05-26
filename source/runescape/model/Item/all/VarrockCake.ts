import { Item } from "../Item";

const VarrockCakeData = {
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
    id: 27798,
    name: "Varrock cake"
  }
export const VarrockCake = Item.fromJson(VarrockCakeData);
