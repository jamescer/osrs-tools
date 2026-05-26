import { Item } from "../Item";

const GrappleAnimationItemData = {
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
    id: 9415,
    name: "Grapple (animation item)"
  }
export const GrappleAnimationItem = Item.fromJson(GrappleAnimationItemData);
