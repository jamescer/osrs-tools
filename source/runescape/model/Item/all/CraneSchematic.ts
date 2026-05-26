import { Item } from "../Item";

const CraneSchematicData = {
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
    id: 9718,
    name: "Crane schematic"
  }
export const CraneSchematic = Item.fromJson(CraneSchematicData);
