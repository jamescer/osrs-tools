import { Item } from "../Item";

const BoltOfCottonData = {
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
    id: 31478,
    name: "Bolt of cotton"
  }
export const BoltOfCotton = Item.fromJson(BoltOfCottonData);
