import { Item } from "../Item";

const ShadowBlockerSchematicData = {
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
    id: 28377,
    name: "Shadow blocker schematic"
  }
export const ShadowBlockerSchematic = Item.fromJson(ShadowBlockerSchematicData);
