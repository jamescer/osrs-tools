import { Item } from "../Item";

const ChaosGauntletsData = {
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
    id: 777,
    name: "Chaos gauntlets"
  }
export const ChaosGauntlets = Item.fromJson(ChaosGauntletsData);
