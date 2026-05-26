import { Item } from "../Item";

const TortuganShieldData = {
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
    id: 31398,
    name: "Tortugan shield"
  }
export const TortuganShield = Item.fromJson(TortuganShieldData);
