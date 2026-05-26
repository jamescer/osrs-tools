import { Item } from "../Item";

const MouthGripData = {
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
    id: 4181,
    name: "Mouth grip"
  }
export const MouthGrip = Item.fromJson(MouthGripData);
