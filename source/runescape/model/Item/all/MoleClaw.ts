import { Item } from "../Item";

const MoleClawData = {
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
    id: 7416,
    name: "Mole claw"
  }
export const MoleClaw = Item.fromJson(MoleClawData);
