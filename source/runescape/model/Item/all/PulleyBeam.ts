import { Item } from "../Item";

const PulleyBeamData = {
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
    id: 7969,
    name: "Pulley beam"
  }
export const PulleyBeam = Item.fromJson(PulleyBeamData);
