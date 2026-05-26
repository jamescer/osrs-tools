import { Item } from "../Item";

const SignedPortraitData = {
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
    id: 4816,
    name: "Signed portrait"
  }
export const SignedPortrait = Item.fromJson(SignedPortraitData);
