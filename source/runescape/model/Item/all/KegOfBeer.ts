import { Item } from "../Item";

const KegOfBeerData = {{
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
    id: 3801,
    name: "Keg of beer"
  }
export const KegOfBeer = Item.fromJson(KegOfBeerData);