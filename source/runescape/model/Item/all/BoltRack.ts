import { Item } from "../Item";

const BoltRackData = {
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
    id: 4740,
    name: "Bolt rack"
  }
export const BoltRack = Item.fromJson(BoltRackData);
