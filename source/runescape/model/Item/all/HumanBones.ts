import { Item } from "../Item";

const HumanBonesData = {
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
    id: 12839,
    name: "Human bones"
  }
export const HumanBones = Item.fromJson(HumanBonesData);
