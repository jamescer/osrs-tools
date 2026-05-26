import { Item } from "../Item";

const PerfectGoldBarData = {
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
    id: 2365,
    name: "'perfect' gold bar"
  }
export const PerfectGoldBar = Item.fromJson(PerfectGoldBarData);
