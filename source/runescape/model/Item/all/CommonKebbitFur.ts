import { Item } from "../Item";

const CommonKebbitFurData = {
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
    id: 10121,
    name: "Common kebbit fur"
  }
export const CommonKebbitFur = Item.fromJson(CommonKebbitFurData);
