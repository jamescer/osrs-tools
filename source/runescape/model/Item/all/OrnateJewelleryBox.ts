import { Item } from "../Item";

const OrnateJewelleryBoxData = {
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
    id: 20628,
    name: "Ornate jewellery box"
  }
export const OrnateJewelleryBox = Item.fromJson(OrnateJewelleryBoxData);
