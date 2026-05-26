import { Item } from "../Item";

const ResearchPackageData = {
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
    id: 290,
    name: "Research package"
  }
export const ResearchPackage = Item.fromJson(ResearchPackageData);
