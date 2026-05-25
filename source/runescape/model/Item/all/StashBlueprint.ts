import { Item } from "../Item";

const StashBlueprintData = {{
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
    id: 25612,
    name: "S.t.a.s.h blueprint"
  }
export const StashBlueprint = Item.fromJson(StashBlueprintData);