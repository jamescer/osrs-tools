import { Item } from "../Item";

const HelmetFragmentData = {
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
    id: 11052,
    name: "Helmet fragment"
  }
export const HelmetFragment = Item.fromJson(HelmetFragmentData);
