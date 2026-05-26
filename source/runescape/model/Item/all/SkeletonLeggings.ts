import { Item } from "../Item";

const SkeletonLeggingsData = {
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
    id: 9923,
    name: "Skeleton leggings"
  }
export const SkeletonLeggings = Item.fromJson(SkeletonLeggingsData);
