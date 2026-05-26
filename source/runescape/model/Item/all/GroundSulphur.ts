import { Item } from "../Item";

const GroundSulphurData = {
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
    id: 3215,
    name: "Ground sulphur"
  }
export const GroundSulphur = Item.fromJson(GroundSulphurData);
