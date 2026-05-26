import { Item } from "../Item";

const MessageTheatreOfBloodData = {
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
    id: 22475,
    name: "Message (Theatre of Blood)"
  }
export const MessageTheatreOfBlood = Item.fromJson(MessageTheatreOfBloodData);
