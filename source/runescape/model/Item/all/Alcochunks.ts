import { Item } from "../Item";

const AlcochunksData = {
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
    id: 3270,
    name: "Alco-chunks"
  }
export const Alcochunks = Item.fromJson(AlcochunksData);
