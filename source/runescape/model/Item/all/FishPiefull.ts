import { Item } from "../Item";

const FishPiefullData = {
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
    id: 7188,
    name: "Fish pie#Full"
  }
export const FishPiefull = Item.fromJson(FishPiefullData);
