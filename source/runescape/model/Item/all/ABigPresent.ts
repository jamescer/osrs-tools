import { Item } from "../Item";

const ABigPresentData = {
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
    id: 26308,
    name: "A big present"
  }
export const ABigPresent = Item.fromJson(ABigPresentData);
