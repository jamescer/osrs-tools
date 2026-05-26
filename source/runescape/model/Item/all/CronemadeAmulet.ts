import { Item } from "../Item";

const CronemadeAmuletData = {
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
    id: 10500,
    name: "Crone-made amulet"
  }
export const CronemadeAmulet = Item.fromJson(CronemadeAmuletData);
