import { Item } from "../Item";

const SpiceRackData = {
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
    id: 24479,
    name: "Spice rack"
  }
export const SpiceRack = Item.fromJson(SpiceRackData);
