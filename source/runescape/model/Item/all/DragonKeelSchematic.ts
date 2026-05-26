import { Item } from "../Item";

const DragonKeelSchematicData = {
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
    id: 32410,
    name: "Dragon keel schematic"
  }
export const DragonKeelSchematic = Item.fromJson(DragonKeelSchematicData);
