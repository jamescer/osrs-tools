import { Item } from "../Item";

const ElementalGuardianStoneData = {
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
    id: 26881,
    name: "Elemental guardian stone"
  }
export const ElementalGuardianStone = Item.fromJson(ElementalGuardianStoneData);
