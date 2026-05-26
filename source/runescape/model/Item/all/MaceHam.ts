import { Item } from "../Item";

const MaceHamData = {
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
    id: 11058,
    name: "Mace (H.A.M.)"
  }
export const MaceHam = Item.fromJson(MaceHamData);
