import { Item } from "../Item";

const CluelessScrollData = {
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
    id: 20249,
    name: "Clueless scroll"
  }
export const CluelessScroll = Item.fromJson(CluelessScrollData);
