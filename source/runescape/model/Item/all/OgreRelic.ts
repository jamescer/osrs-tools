import { Item } from "../Item";

const OgreRelicData = {
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
    id: 2372,
    name: "Ogre relic"
  }
export const OgreRelic = Item.fromJson(OgreRelicData);
