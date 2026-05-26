import { Item } from "../Item";

const FossilisedLeafData = {
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
    id: 21596,
    name: "Fossilised leaf"
  }
export const FossilisedLeaf = Item.fromJson(FossilisedLeafData);
