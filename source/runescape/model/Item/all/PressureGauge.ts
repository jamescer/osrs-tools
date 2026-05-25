import { Item } from "../Item";

const PressureGaugeData = {{
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
    id: 271,
    name: "Pressure gauge"
  }
export const PressureGauge = Item.fromJson(PressureGaugeData);