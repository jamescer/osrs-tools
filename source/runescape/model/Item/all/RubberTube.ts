import { Item } from "../Item";

const RubberTubeData = {
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
    id: 276,
    name: "Rubber tube"
  }
export const RubberTube = Item.fromJson(RubberTubeData);
