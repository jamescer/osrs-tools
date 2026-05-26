import { Item } from "../Item";

const AhabsBeerData = {
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
    id: 6561,
    name: "Ahab's beer"
  }
export const AhabsBeer = Item.fromJson(AhabsBeerData);
