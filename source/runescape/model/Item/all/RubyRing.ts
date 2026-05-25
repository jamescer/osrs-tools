import { Item } from "../Item";

const RubyRingData = {{
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
    id: 1641,
    name: "Ruby ring"
  }
export const RubyRing = Item.fromJson(RubyRingData);