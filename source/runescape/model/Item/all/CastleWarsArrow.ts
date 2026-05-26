import { Item } from "../Item";

const CastleWarsArrowData = {
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
    id: 30694,
    name: "Castle wars arrow"
  }
export const CastleWarsArrow = Item.fromJson(CastleWarsArrowData);
