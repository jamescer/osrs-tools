import { Item } from "../Item";

const BigFishingNetData = {
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
    id: 305,
    name: "Big fishing net"
  }
export const BigFishingNet = Item.fromJson(BigFishingNetData);
