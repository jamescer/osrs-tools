import { Item } from "../Item";

const SnowmanRingData = {
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
    id: 26314,
    name: "Snowman ring"
  }
export const SnowmanRing = Item.fromJson(SnowmanRingData);
