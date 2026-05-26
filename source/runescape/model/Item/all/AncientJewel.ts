import { Item } from "../Item";

const AncientJewelData = {
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
    id: 27607,
    name: "Ancient jewel"
  }
export const AncientJewel = Item.fromJson(AncientJewelData);
