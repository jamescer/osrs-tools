import { Item } from "../Item";

const CaveGoblinWireData = {
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
    id: 10981,
    name: "Cave goblin wire"
  }
export const CaveGoblinWire = Item.fromJson(CaveGoblinWireData);
