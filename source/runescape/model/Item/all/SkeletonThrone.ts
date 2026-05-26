import { Item } from "../Item";

const SkeletonThroneData = {
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
    id: 8361,
    name: "Skeleton throne"
  }
export const SkeletonThrone = Item.fromJson(SkeletonThroneData);
