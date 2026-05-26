import { Item } from "../Item";

const OakWallDecorationData = {
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
    id: 8102,
    name: "Oak wall decoration"
  }
export const OakWallDecoration = Item.fromJson(OakWallDecorationData);
