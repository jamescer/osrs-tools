import { Item } from "../Item";

const ClothesPouchData = {
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
    id: 28163,
    name: "Clothes pouch"
  }
export const ClothesPouch = Item.fromJson(ClothesPouchData);
