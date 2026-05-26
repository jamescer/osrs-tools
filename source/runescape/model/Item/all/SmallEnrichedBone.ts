import { Item } from "../Item";

const SmallEnrichedBoneData = {
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
    id: 21547,
    name: "Small enriched bone"
  }
export const SmallEnrichedBone = Item.fromJson(SmallEnrichedBoneData);
