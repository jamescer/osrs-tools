import { Item } from "../Item";

const MarlosCrateData = {
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
    id: 24940,
    name: "Marlo's crate"
  }
export const MarlosCrate = Item.fromJson(MarlosCrateData);
