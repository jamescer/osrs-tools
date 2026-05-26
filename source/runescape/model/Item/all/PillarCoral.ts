import { Item } from "../Item";

const PillarCoralData = {
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
    id: 31484,
    name: "Pillar coral"
  }
export const PillarCoral = Item.fromJson(PillarCoralData);
