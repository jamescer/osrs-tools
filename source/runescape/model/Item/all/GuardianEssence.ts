import { Item } from "../Item";

const GuardianEssenceData = {
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
    id: 26879,
    name: "Guardian essence"
  }
export const GuardianEssence = Item.fromJson(GuardianEssenceData);
