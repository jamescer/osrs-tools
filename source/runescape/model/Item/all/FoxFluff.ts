import { Item } from "../Item";

const FoxFluffData = {
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
    id: 29233,
    name: "Fox fluff"
  }
export const FoxFluff = Item.fromJson(FoxFluffData);
