import { Item } from "../Item";

const StashChartData = {{
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
    id: 25611,
    name: "S.t.a.s.h chart"
  }
export const StashChart = Item.fromJson(StashChartData);