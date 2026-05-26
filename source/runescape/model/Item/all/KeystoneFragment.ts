import { Item } from "../Item";

const KeystoneFragmentData = {
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
    id: 30961,
    name: "Keystone fragment"
  }
export const KeystoneFragment = Item.fromJson(KeystoneFragmentData);
