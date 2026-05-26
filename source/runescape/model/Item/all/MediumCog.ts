import { Item } from "../Item";

const MediumCogData = {
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
    id: 9725,
    name: "Medium cog"
  }
export const MediumCog = Item.fromJson(MediumCogData);
