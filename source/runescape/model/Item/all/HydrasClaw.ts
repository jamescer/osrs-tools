import { Item } from "../Item";

const HydrasClawData = {
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
    id: 22966,
    name: "Hydra's claw"
  }
export const HydrasClaw = Item.fromJson(HydrasClawData);
