import { Item } from "../Item";

const GrinderAnimationItemData = {
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
    id: 798,
    name: "Grinder (animation item)"
  }
export const GrinderAnimationItem = Item.fromJson(GrinderAnimationItemData);
