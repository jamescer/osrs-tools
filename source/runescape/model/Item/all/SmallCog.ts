import { Item } from "../Item";

const SmallCogData = {{
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
    id: 9726,
    name: "Small cog"
  }
export const SmallCog = Item.fromJson(SmallCogData);