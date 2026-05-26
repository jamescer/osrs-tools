import { Item } from "../Item";

const BoneClubData = {
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
    id: 5018,
    name: "Bone club"
  }
export const BoneClub = Item.fromJson(BoneClubData);
