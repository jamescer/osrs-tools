import { Item } from "../Item";

const SilverBooknormalData = {
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
    id: 1802,
    name: "Silver book#Normal"
  }
export const SilverBooknormal = Item.fromJson(SilverBooknormalData);
