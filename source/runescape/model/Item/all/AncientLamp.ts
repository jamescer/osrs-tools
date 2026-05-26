import { Item } from "../Item";

const AncientLampData = {
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
    id: 28409,
    name: "Ancient lamp"
  }
export const AncientLamp = Item.fromJson(AncientLampData);
