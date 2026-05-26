import { Item } from "../Item";

const MyreSnelmData = {
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
    id: 3327,
    name: "Myre snelm"
  }
export const MyreSnelm = Item.fromJson(MyreSnelmData);
