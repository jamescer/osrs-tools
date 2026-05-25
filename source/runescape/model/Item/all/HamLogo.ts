import { Item } from "../Item";

const HamLogoData = {{
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
    id: 4306,
    name: "Ham logo"
  }
export const HamLogo = Item.fromJson(HamLogoData);