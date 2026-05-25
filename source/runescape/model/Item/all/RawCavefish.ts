import { Item } from "../Item";

const RawCavefishData = {{
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
    id: 25658,
    name: "Raw cavefish"
  }
export const RawCavefish = Item.fromJson(RawCavefishData);