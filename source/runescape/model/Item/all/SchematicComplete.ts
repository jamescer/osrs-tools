import { Item } from "../Item";

const SchematicCompleteData = {
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
    id: 4578,
    name: "Schematic (complete)"
  }
export const SchematicComplete = Item.fromJson(SchematicCompleteData);
