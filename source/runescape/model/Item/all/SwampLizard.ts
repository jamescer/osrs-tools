import { Item } from "../Item";

const SwampLizardData = {
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
    id: 10149,
    name: "Swamp lizard"
  }
export const SwampLizard = Item.fromJson(SwampLizardData);
