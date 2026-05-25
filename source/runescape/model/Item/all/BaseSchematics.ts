import { Item } from "../Item";

const BaseSchematicsData = {{
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
    id: 4574,
    name: "Base schematics"
  }
export const BaseSchematics = Item.fromJson(BaseSchematicsData);