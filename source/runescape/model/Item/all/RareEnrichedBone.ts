import { Item } from "../Item";

const RareEnrichedBoneData = {
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
    id: 21553,
    name: "Rare enriched bone"
  }
export const RareEnrichedBone = Item.fromJson(RareEnrichedBoneData);
