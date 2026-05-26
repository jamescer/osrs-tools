import { Item } from "../Item";

const GoldOreFragmentData = {
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
    id: 21535,
    name: "Gold ore fragment"
  }
export const GoldOreFragment = Item.fromJson(GoldOreFragmentData);
