import { Item } from "../Item";

const PhoenixregularData = {
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
    id: 20693,
    name: "Phoenix#Regular"
  }
export const Phoenixregular = Item.fromJson(PhoenixregularData);
