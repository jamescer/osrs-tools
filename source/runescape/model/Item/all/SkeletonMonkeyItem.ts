import { Item } from "../Item";

const SkeletonMonkeyItemData = {{
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
    id: 24865,
    name: "Skeleton monkey (item)"
  }
export const SkeletonMonkeyItem = Item.fromJson(SkeletonMonkeyItemData);