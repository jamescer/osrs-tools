import { Item } from "../Item";

const RosewoodRepairKitData = {
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
    id: 31982,
    name: "Rosewood repair kit"
  }
export const RosewoodRepairKit = Item.fromJson(RosewoodRepairKitData);
