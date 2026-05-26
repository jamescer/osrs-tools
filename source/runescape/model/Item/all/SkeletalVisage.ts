import { Item } from "../Item";

const SkeletalVisageData = {
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
    id: 22006,
    name: "Skeletal visage"
  }
export const SkeletalVisage = Item.fromJson(SkeletalVisageData);
