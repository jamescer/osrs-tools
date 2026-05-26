import { Item } from "../Item";

const LeverSchematicData = {
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
    id: 9719,
    name: "Lever schematic"
  }
export const LeverSchematic = Item.fromJson(LeverSchematicData);
