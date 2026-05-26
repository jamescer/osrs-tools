import { Item } from "../Item";

const StoolAnimationItemData = {
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
    id: 5732,
    name: "Stool (animation item)"
  }
export const StoolAnimationItem = Item.fromJson(StoolAnimationItemData);
