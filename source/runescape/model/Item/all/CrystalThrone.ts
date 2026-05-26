import { Item } from "../Item";

const CrystalThroneData = {
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
    id: 8362,
    name: "Crystal throne"
  }
export const CrystalThrone = Item.fromJson(CrystalThroneData);
