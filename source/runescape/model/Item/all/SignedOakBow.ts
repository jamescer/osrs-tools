import { Item } from "../Item";

const SignedOakBowData = {
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
    id: 4236,
    name: "Signed oak bow"
  }
export const SignedOakBow = Item.fromJson(SignedOakBowData);
