import { Item } from "../Item";

const HumanEyeData = {
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
    id: 12843,
    name: "Human eye"
  }
export const HumanEye = Item.fromJson(HumanEyeData);
