import { Item } from "../Item";

const BaggedBluebellsData = {
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
    id: 8455,
    name: "Bagged bluebells"
  }
export const BaggedBluebells = Item.fromJson(BaggedBluebellsData);
