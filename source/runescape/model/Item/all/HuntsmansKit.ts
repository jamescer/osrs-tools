import { Item } from "../Item";

const HuntsmansKitData = {{
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
    id: 29309,
    name: "Huntsman's kit"
  }
export const HuntsmansKit = Item.fromJson(HuntsmansKitData);