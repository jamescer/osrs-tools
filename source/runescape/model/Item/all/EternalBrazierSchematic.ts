import { Item } from "../Item";

const EternalBrazierSchematicData = {
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
    id: 32403,
    name: "Eternal brazier schematic"
  }
export const EternalBrazierSchematic = Item.fromJson(EternalBrazierSchematicData);
