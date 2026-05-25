import { Item } from "../Item";

const RawMonkfishData = {{
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
    id: 7944,
    name: "Raw monkfish"
  }
export const RawMonkfish = Item.fromJson(RawMonkfishData);