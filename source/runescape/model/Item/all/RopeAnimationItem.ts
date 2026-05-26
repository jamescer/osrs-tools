import { Item } from "../Item";

const RopeAnimationItemData = {
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
    id: 4498,
    name: "Rope (animation item)"
  }
export const RopeAnimationItem = Item.fromJson(RopeAnimationItemData);
