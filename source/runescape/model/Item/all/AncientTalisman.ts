import { Item } from "../Item";

const AncientTalismanData = {{
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
    id: 681,
    name: "Ancient talisman"
  }
export const AncientTalisman = Item.fromJson(AncientTalismanData);