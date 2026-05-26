import { Item } from "../Item";

const CrazedScribblesData = {
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
    id: 24049,
    name: "Crazed scribbles"
  }
export const CrazedScribbles = Item.fromJson(CrazedScribblesData);
