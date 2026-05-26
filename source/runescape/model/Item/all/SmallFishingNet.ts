import { Item } from "../Item";

const SmallFishingNetData = {
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
    id: 303,
    name: "Small fishing net"
  }
export const SmallFishingNet = Item.fromJson(SmallFishingNetData);
