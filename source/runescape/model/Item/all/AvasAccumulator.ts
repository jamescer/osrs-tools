import { Item } from "../Item";

const AvasAccumulatorData = {
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
    id: 10499,
    name: "Ava's accumulator"
  }
export const AvasAccumulator = Item.fromJson(AvasAccumulatorData);
