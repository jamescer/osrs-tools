import { Item } from "../Item";

const SwampToadItemData = {
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
    id: 2150,
    name: "Swamp toad (item)"
  }
export const SwampToadItem = Item.fromJson(SwampToadItemData);
