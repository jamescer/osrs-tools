import { Item } from "../Item";

const OakRepairKitData = {{
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
    id: 31967,
    name: "Oak repair kit"
  }
export const OakRepairKit = Item.fromJson(OakRepairKitData);