import { Item } from "../Item";

const EmptyLightOrbData = {
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
    id: 10980,
    name: "Empty light orb"
  }
export const EmptyLightOrb = Item.fromJson(EmptyLightOrbData);
