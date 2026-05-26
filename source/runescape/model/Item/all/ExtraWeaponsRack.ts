import { Item } from "../Item";

const ExtraWeaponsRackData = {
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
    id: 8030,
    name: "Extra weapons rack"
  }
export const ExtraWeaponsRack = Item.fromJson(ExtraWeaponsRackData);
