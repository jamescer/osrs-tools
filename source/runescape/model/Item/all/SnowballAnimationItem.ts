import { Item } from "../Item";

const SnowballAnimationItemData = {
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
    id: 10509,
    name: "Snowball (animation item)"
  }
export const SnowballAnimationItem = Item.fromJson(SnowballAnimationItemData);
