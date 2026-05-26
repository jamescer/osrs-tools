import { Item } from "../Item";

const ZaffsInstructionsData = {
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
    id: 11011,
    name: "Zaff's instructions"
  }
export const ZaffsInstructions = Item.fromJson(ZaffsInstructionsData);
