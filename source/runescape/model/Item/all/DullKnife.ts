import { Item } from "../Item";

const DullKnifeData = {
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
    id: 32865,
    name: "Dull knife"
  }
export const DullKnife = Item.fromJson(DullKnifeData);
