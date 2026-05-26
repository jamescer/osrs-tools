import { Item } from "../Item";

const RawMossLizardData = {
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
    id: 29076,
    name: "Raw moss lizard"
  }
export const RawMossLizard = Item.fromJson(RawMossLizardData);
