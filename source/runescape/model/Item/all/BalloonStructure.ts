import { Item } from "../Item";

const BalloonStructureData = {
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
    id: 9933,
    name: "Balloon structure"
  }
export const BalloonStructure = Item.fromJson(BalloonStructureData);
