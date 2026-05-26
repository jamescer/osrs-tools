import { Item } from "../Item";

const AncientEssenceData = {
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
    id: 27616,
    name: "Ancient essence"
  }
export const AncientEssence = Item.fromJson(AncientEssenceData);
