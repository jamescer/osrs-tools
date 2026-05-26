import { Item } from "../Item";

const HoopAnimationItemData = {
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
    id: 7682,
    name: "Hoop (animation item)"
  }
export const HoopAnimationItem = Item.fromJson(HoopAnimationItemData);
