import { Item } from "../Item";

const BeerTankardData = {{
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
    id: 3803,
    name: "Beer tankard"
  }
export const BeerTankard = Item.fromJson(BeerTankardData);