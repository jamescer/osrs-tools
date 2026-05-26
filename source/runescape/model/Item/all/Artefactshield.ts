import { Item } from "../Item";

const ArtefactshieldData = {
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
    id: 11055,
    name: "Artefact#Shield"
  }
export const Artefactshield = Item.fromJson(ArtefactshieldData);
