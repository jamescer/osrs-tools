import { Item } from "../Item";

const AncientIconData = {
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
    id: 27627,
    name: "Ancient icon"
  }
export const AncientIcon = Item.fromJson(AncientIconData);
