import { Item } from "../Item";

const CraftsmanScrollData = {
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
    id: 31214,
    name: "Craftsman scroll"
  }
export const CraftsmanScroll = Item.fromJson(CraftsmanScrollData);
