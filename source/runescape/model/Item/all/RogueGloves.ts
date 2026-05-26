import { Item } from "../Item";

const RogueGlovesData = {
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
    id: 5556,
    name: "Rogue gloves"
  }
export const RogueGloves = Item.fromJson(RogueGlovesData);
