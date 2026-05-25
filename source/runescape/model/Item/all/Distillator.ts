import { Item } from "../Item";

const DistillatorData = {{
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
    id: 420,
    name: "Distillator"
  }
export const Distillator = Item.fromJson(DistillatorData);