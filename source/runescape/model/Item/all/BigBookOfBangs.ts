import { Item } from "../Item";

const BigBookOfBangsData = {
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
    id: 3230,
    name: "Big book of bangs"
  }
export const BigBookOfBangs = Item.fromJson(BigBookOfBangsData);
