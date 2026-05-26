import { Item } from "../Item";

const GroundThistleData = {
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
    id: 3264,
    name: "Ground thistle"
  }
export const GroundThistle = Item.fromJson(GroundThistleData);
