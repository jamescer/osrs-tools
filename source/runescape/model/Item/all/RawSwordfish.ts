import { Item } from "../Item";

const RawSwordfishData = {{
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
    id: 371,
    name: "Raw swordfish"
  }
export const RawSwordfish = Item.fromJson(RawSwordfishData);