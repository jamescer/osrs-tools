import { Item } from "../Item";

const FrozenTabletData = {{
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
    id: 28333,
    name: "Frozen tablet"
  }
export const FrozenTablet = Item.fromJson(FrozenTabletData);