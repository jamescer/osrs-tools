import { Item } from "../Item";

const IronwoodRepairKitData = {
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
    id: 31979,
    name: "Ironwood repair kit"
  }
export const IronwoodRepairKit = Item.fromJson(IronwoodRepairKitData);
