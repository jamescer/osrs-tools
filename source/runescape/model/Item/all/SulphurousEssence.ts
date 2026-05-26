import { Item } from "../Item";

const SulphurousEssenceData = {
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
    id: 29087,
    name: "Sulphurous essence"
  }
export const SulphurousEssence = Item.fromJson(SulphurousEssenceData);
