import { Item } from "../Item";

const CowTrousersData = {
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
    id: 12957,
    name: "Cow trousers"
  }
export const CowTrousers = Item.fromJson(CowTrousersData);
