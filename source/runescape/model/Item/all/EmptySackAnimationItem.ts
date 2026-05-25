import { Item } from "../Item";

const EmptySackAnimationItemData = {{
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
    id: 10486,
    name: "Empty sack (animation item)"
  }
export const EmptySackAnimationItem = Item.fromJson(EmptySackAnimationItemData);