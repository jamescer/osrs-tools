import { Item } from "../Item";

const RogueKitData = {
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
    id: 5558,
    name: "Rogue kit"
  }
export const RogueKit = Item.fromJson(RogueKitData);
