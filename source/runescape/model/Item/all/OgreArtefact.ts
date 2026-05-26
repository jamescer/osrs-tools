import { Item } from "../Item";

const OgreArtefactData = {
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
    id: 4818,
    name: "Ogre artefact"
  }
export const OgreArtefact = Item.fromJson(OgreArtefactData);
