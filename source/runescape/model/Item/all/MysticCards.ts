import { Item } from "../Item";

const MysticCardsData = {{
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
    id: 27645,
    name: "Mystic cards"
  }
export const MysticCards = Item.fromJson(MysticCardsData);