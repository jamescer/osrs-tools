import { Item } from "../Item";

const BoneBeadsData = {
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
    id: 618,
    name: "Bone beads"
  }
export const BoneBeads = Item.fromJson(BoneBeadsData);
