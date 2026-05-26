import { Item } from "../Item";

const AMagicScrollData = {
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
    id: 6949,
    name: "A magic scroll"
  }
export const AMagicScroll = Item.fromJson(AMagicScrollData);
