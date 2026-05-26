import { Item } from "../Item";

const PremadeChocBombData = {
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
    id: 2229,
    name: "Premade choc bomb"
  }
export const PremadeChocBomb = Item.fromJson(PremadeChocBombData);
