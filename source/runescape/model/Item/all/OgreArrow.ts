import { Item } from "../Item";

const OgreArrowData = {
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
    id: 2866,
    name: "Ogre arrow"
  }
export const OgreArrow = Item.fromJson(OgreArrowData);
