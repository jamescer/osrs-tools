import { Item } from "../Item";

const MapleBlackjackData = {
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
    id: 6416,
    name: "Maple blackjack"
  }
export const MapleBlackjack = Item.fromJson(MapleBlackjackData);
