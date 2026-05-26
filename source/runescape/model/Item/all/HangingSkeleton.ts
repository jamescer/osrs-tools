import { Item } from "../Item";

const HangingSkeletonData = {
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
    id: 8127,
    name: "Hanging skeleton"
  }
export const HangingSkeleton = Item.fromJson(HangingSkeletonData);
