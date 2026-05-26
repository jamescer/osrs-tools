import { Item } from "../Item";

const SilverSickleData = {
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
    id: 2961,
    name: "Silver sickle"
  }
export const SilverSickle = Item.fromJson(SilverSickleData);
