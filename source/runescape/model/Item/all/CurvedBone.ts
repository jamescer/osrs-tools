import { Item } from "../Item";

const CurvedBoneData = {
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
    id: 10977,
    name: "Curved bone"
  }
export const CurvedBone = Item.fromJson(CurvedBoneData);
