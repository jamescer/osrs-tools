import { Item } from "../Item";

const SpareControlsData = {{
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
    id: 4002,
    name: "Spare controls"
  }
export const SpareControls = Item.fromJson(SpareControlsData);