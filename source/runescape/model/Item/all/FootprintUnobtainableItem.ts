import { Item } from "../Item";

const FootprintUnobtainableItemData = {
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
    id: 9951,
    name: "Footprint (unobtainable item)"
  }
export const FootprintUnobtainableItem = Item.fromJson(FootprintUnobtainableItemData);
