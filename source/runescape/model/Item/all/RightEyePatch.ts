import { Item } from "../Item";

const RightEyePatchData = {
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
    id: 1025,
    name: "Right eye patch"
  }
export const RightEyePatch = Item.fromJson(RightEyePatchData);
